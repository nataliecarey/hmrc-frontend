// TODO: move this to utils
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce (func, wait, immediate) {
  var timeout

  return function () {
    var context = this
    var args = arguments

    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    var callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

;(function (global) {
  'use strict'

  var $ = global.jQuery
  var HMRC = global.HMRC || {}

  HMRC.accountMenu = (function (global) {
    var $nav = document.querySelector('.hmrc-account-menu')
    var $mainNav = document.querySelector('.hmrc-account-menu__main')
    var $subNav = document.querySelector('.hmrc-subnav')
    var $showSubnavLink = $('#account-menu__main-2')
    var $showNavLinkMobile = $('.hmrc-account-menu__link--menu')
    var $backLink = $('.hmrc-account-menu__link--back a')

    $subNav.setAttribute('aria-hidden', 'true')
    $subNav.setAttribute('tabindex', '-1')

    $showSubnavLink.attr({
      'aria-controls': $(this).hash,
      'aria-expanded': 'false'
    })

    $showSubnavLink.on({
      click: function (e) {
        if (isSmall(global)) {
          // TODO: remove redundant check - showSubnavLink appears only when subnav is not expanded
          if (!$(this).hasClass('hmrc-account-menu__link--more-expanded')) {
            hideMainNavMobile($(this))
            showSubnavMobile($(this))
          }
        } else {
          if ($(this).hasClass('hmrc-account-menu__link--more-expanded')) {
            hideSubnavDesktop()
          } else {
            showSubnavDesktop()
          }
        }

        e.preventDefault()
        e.stopPropagation()
      },

      focusout: function () {
        if (!isSmall(global)) {
          $(this.hash).data('subMenuTimer', setTimeout(0))
        }
      },

      focusin: function () {
        if (!isSmall(global)) {
          clearTimeout($(this.hash).data('subMenuTimer'))
        }
      }
    })

    $backLink.on('click', function (e) {
      // TODO: remove redundant check - backlink appears only when subnav is open
      if ($mainNav.classList.contains('hmrc-subnav-is-open')) {
        hideSubnavMobile()
        showMainNavMobile()
      }

      e.preventDefault()
    })

    $subNav.addEventListener('focusout', function (event) {
      if (!isSmall(global)) {
        event.currentTarget.dataset.subMenuTimer = setTimeout(function () {
          hideSubnavDesktop()
        }, 0)
      }
    })

    $subNav.addEventListener('focusin', function (event) {
      clearTimeout(event.currentTarget.dataset.subMenuTimer)
    })

    $showNavLinkMobile.on('click', function (e) {
      if (isSmall(global)) {
        if ($mainNav.classList.contains('hmrc-subnav-is-open') || $mainNav.classList.contains('main-nav-is-open')) {
          hideSubnavMobile()
          hideMainNavMobile($(this))
        } else {
          showMainNavMobile()
        }

        e.preventDefault()
      }
    })

    function init () {
      if (isSmall(global)) {
        $nav.classList.add('is-smaller')
        $showNavLinkMobile
          .attr('aria-hidden', 'false')
          .removeClass('js-hidden')
        hideSubnavMobile()
        hideMainNavMobile($showNavLinkMobile)
      } else {
        $nav.classList.remove('is-smaller')
        $showNavLinkMobile
          .attr('aria-hidden', 'true')
          .addClass('js-hidden')
        $mainNav.classList.remove('main-nav-is-open', 'js-hidden')
        $subNav.classList.remove('js-hidden')
      }
    }

    var resizeHandler = debounce(init, 250)

    function showMainNavMobile () {
      // TODO: shall we add main-nav-is-open to `nav`????
      $mainNav.classList.remove('js-hidden')
      $mainNav.classList.add('main-nav-is-open')
      $mainNav.setAttribute('aria-expanded', 'true')

      $showNavLinkMobile
        .attr('aria-expanded', 'true')
        .addClass('hmrc-account-home--account--is-open')
    }

    function hideMainNavMobile (e) {
      $mainNav.classList.remove('main-nav-is-open')
      $mainNav.setAttribute('aria-expanded', 'false')

      if (e.hasClass('hmrc-account-menu__link--menu')) {
        $mainNav.classList.remove('hmrc-subnav-is-open')
        $mainNav.classList.add('js-hidden')

        $showNavLinkMobile
          .attr('aria-expanded', 'false')
          .removeClass('hmrc-account-home--account--is-open')
      } else if (e.hasClass('hmrc-account-menu__link--more')) {
        $mainNav.classList.add('hmrc-subnav-is-open')
      }
    }

    function showSubnavMobile (e) {
      $nav.classList.add('hmrc-subnav-is-open')

      $mainNav.classList.remove('main-nav-is-open')
      $mainNav.classList.add('hmrc-subnav-is-open')

      $subNav.classList.add('hmrc-subnav-reveal')
      $subNav.setAttribute('aria-hidden', 'false')
      $subNav.setAttribute('aria-expanded', 'true')

      $showSubnavLink
        .addClass('hmrc-account-menu__link--more-expanded')
        .attr({
          'aria-hidden': 'false',
          'aria-expanded': 'true'
        })

      $backLink.parent()
        .attr('aria-hidden', 'false')
        .removeClass('hidden')

      e.closest('li').addClass('active-subnav-parent')

      $subNav.classList.remove('js-hidden')

      e.parent().siblings().not($backLink.parent()).addClass('hidden')
    }

    function hideSubnavMobile () {
      $nav.classList.remove('hmrc-subnav-is-open')

      $mainNav.classList.remove('hmrc-subnav-is-open')
      $mainNav.classList.add('main-nav-is-open')

      $subNav.classList.remove('hmrc-subnav-reveal')
      $subNav.setAttribute('aria-hidden', 'true')
      $subNav.setAttribute('aria-expanded', 'false')

      $showSubnavLink
        .removeClass('hmrc-account-menu__link--more-expanded')
        .attr({
          'aria-hidden': 'true',
          'aria-expanded': 'false'
        })

      $backLink.parent()
        .attr('aria-hidden', 'true')
        .addClass('hidden')

      $showSubnavLink.closest('li').removeClass('active-subnav-parent')

      $subNav.classList.add('js-hidden')

      $backLink.parent().siblings().not($backLink.parent()).removeClass('hidden')
      // TODO: change to
      // mainNav.children().not(backLink).removeClass('js-hidden')
    }

    function showSubnavDesktop () {
      $nav.classList.add('hmrc-subnav-is-open')

      $mainNav.classList.add('hmrc-subnav-is-open')

      $subNav.classList.add('hmrc-subnav-reveal')
      $subNav.setAttribute('aria-hidden', 'false')
      $subNav.setAttribute('aria-expanded', 'true')

      setTimeout(function () {
        $($subNav).focus()
      }, 500)

      $showSubnavLink
        .addClass('hmrc-account-menu__link--more-expanded')
        .attr({
          'aria-hidden': 'false',
          'aria-expanded': 'true'
        })
    }

    function hideSubnavDesktop () {
      $nav.classList.remove('main-nav-is-open', 'hmrc-subnav-is-open')

      $mainNav.classList.remove('hmrc-subnav-is-open')

      $subNav.classList.remove('hmrc-subnav-reveal')
      $subNav.setAttribute('aria-hidden', 'true')
      $subNav.setAttribute('aria-expanded', 'false')

      $showSubnavLink
        .removeClass('hmrc-account-menu__link--more-expanded')
        .attr({
          'aria-hidden': 'true',
          'aria-expanded': 'false'
        })
    }

    function isSmall (element) {
      return ($(element).width() <= 768)
    }

    return {
      'init': init,
      'onresize': resizeHandler
    }
  })(global)

  global.HMRC = HMRC
  $(window).resize(HMRC.accountMenu.onresize)
})(window)

// initialize
window.HMRC.accountMenu.init()
