!(function (a) {
  "use strict";
  var t = a("body").attr("data-page-url"),
    e = document.title,
    o = window.History;
  function l() {
    a("body").removeClass("loading"),
      a("body").removeClass("menu--open"),
      a(".active-link").removeClass("active-link"),
      a('a[href="' + t + '"]').addClass("active-link"),
      Waypoint.destroyAll();
    var e = 0;
    a(".gallery").each(function () {
      var t = a(this),
        o = "gallery-" + ++e;
      t.attr("id", o);
      var l = t.attr("data-columns");
      t.append('<div class="gallery__wrap"></div>'),
        t.children("img").each(function () {
          a(this).appendTo("#" + o + " .gallery__wrap");
        }),
        t.find(".gallery__wrap img").each(function () {
          var t = a(this).attr("src");
          a(this)
            .wrapAll(
              '<div class="gallery__item"><a href="' +
                t +
                '" class="gallery__item__link"></div></div>'
            )
            .appendTo();
        }),
        t.imagesLoaded(function () {
          if ("1" === l) {
            t.addClass("gallery--carousel"),
              t.children(".gallery__wrap").addClass("owl-carousel"),
              t
                .children(".gallery__wrap")
                .owlCarousel({
                  items: 1,
                  loop: !0,
                  mouseDrag: !1,
                  touchDrag: !0,
                  pullDrag: !1,
                  dots: !0,
                  autoplay: !1,
                  autoplayTimeout: 6e3,
                  autoHeight: !0,
                  animateOut: "fadeOut",
                });
            new Waypoint({
              element: document.getElementById(o),
              handler: function (a) {
                "down" === a &&
                  t.children(".gallery__wrap").trigger("stop.owl.autoplay"),
                  "up" === a &&
                    t.children(".gallery__wrap").trigger("play.owl.autoplay");
              },
              offset: "-100%",
            }),
              new Waypoint({
                element: document.getElementById(o),
                handler: function (a) {
                  "down" === a &&
                    t.children(".gallery__wrap").trigger("play.owl.autoplay"),
                    "up" === a &&
                      t.children(".gallery__wrap").trigger("stop.owl.autoplay");
                },
                offset: "100%",
              });
          } else t.addClass("gallery--grid"), t.children(".gallery__wrap").masonry({ itemSelector: ".gallery__item", transitionDuration: 0 }), t.find(".gallery__item__link").fluidbox({ loader: !0 });
          t.addClass("gallery--on");
        });
    }),
      a(".project__images").each(function () {
        var t = a(this);
        t.imagesLoaded(function () {
          t.owlCarousel({
            items: 1,
            touchDrag: !0,
            dots: !0,
            nav: !0,
            navText: [
              '<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="dot" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>',
              '<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="dot" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>',
            ],
            autoHeight: !0,
            margin: 20,
          });
        });
      }),
      a(".post__content p > img").each(function () {
        var t = a(this).parent("p");
        a(this).insertAfter(t),
          a(this).wrapAll('<div class="image-wrap"></div>'),
          t.remove();
      }),
      a(".post__content iframe").each(function () {
        if (
          a(this).attr("src").indexOf("youtube") >= 0 ||
          a(this).attr("src").indexOf("vimeo") >= 0
        ) {
          var t = a(this).attr("width"),
            e = (a(this).attr("height") / t) * 100;
          a(this).wrapAll(
            '<div class="video" style="padding-bottom:' + e + '%;"></div>'
          );
        }
      }),
      a(".post__content table").each(function () {
        a(this).wrapAll('<div class="table-wrap"></div>');
      });
  }
  o.Adapter.bind(window, "statechange", function () {
    var n = o.getState();
    a("body").addClass("loading"),
      a(".page-loader").load(n.hash + " .page__content", function () {
        a("body, html").animate({ scrollTop: 0 }, 300);
        setTimeout(function () {
          a(".page .page__content").remove(),
            a(".page-loader .page__content").appendTo(".page"),
            a("body").attr("data-page-url", window.location.pathname),
            (t = a("body").attr("data-page-url")),
            (e = a(".page__content").attr("data-page-title")),
            (document.title = e),
            l();
        }, 400);
      });
  }),
    a("body").hasClass("ajax-loading") &&
      a(document).on("click", "a", function (l) {
        l.preventDefault();
        var n = a(this).attr("href");
        a(this).hasClass("js-no-ajax") ||
        n.indexOf("#") >= 0 ||
        n.indexOf("mailto:") >= 0 ||
        n.indexOf("tel:") >= 0
          ? (window.location = n)
          : a(this).hasClass("js-contact") ||
            a(this).is(".gallery__item__link") ||
            (n.indexOf("http") >= 0
              ? window.open(n, "_blank")
              : ((t = n), o.pushState(null, e, n)));
      }),
    a(document).on("click", ".js-contact", function (t) {
      t.preventDefault(),
        a("body").removeClass("menu--open"),
        a(".contact").addClass("visible"),
        a(".page").addClass("locked"),
        a("body").addClass("locked"),
        a(".button--close-modal").on("click", function () {
          a(".contact").removeClass("visible"),
            a(".page").removeClass("locked"),
            a("body").removeClass("locked");
        });
    }),
    l(),
    a(document).on("click", ".js-menu-toggle", function () {
      a("body").hasClass("menu--open")
        ? a("body").removeClass("menu--open")
        : a("body").addClass("menu--open");
    }),
    a(document).on("click", ".menu__list__item__link", function () {
      a(".menu").hasClass("menu--open") && a(".menu").removeClass("menu--open");
    }),
    a(document).on("click", ".post", function () {
      var l = a(this).find(".post__title a").attr("href");
      a("body").hasClass("ajax-loading")
        ? ((t = l), o.pushState(null, e, l))
        : (window.location = l);
    }),
    a(document).on("submit", "#contact-form", function (t) {
      a(".contact-form__item--error").removeClass("contact-form__item--error");
      var e = a('.contact-form__input[name="email"]'),
        o = a('.contact-form__input[name="name"]'),
        l = a('.contact-form__textarea[name="message"]'),
        n = a(".contact-form__gotcha");
      "" === e.val() &&
        e.closest(".contact-form__item").addClass("contact-form__item--error"),
        "" === o.val() &&
          o
            .closest(".contact-form__item")
            .addClass("contact-form__item--error"),
        "" === l.val() &&
          l
            .closest(".contact-form__item")
            .addClass("contact-form__item--error"),
        ("" !== e.val() &&
          "" !== o.val() &&
          "" !== l.val() &&
          0 === n.val().length) ||
          t.preventDefault();
    });
})(jQuery);
