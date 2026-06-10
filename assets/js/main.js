document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  function setNavOpen(isOpen) {
    if (!mainNav || !navToggle) {
      return;
    }
    mainNav.classList.toggle("is-open", Boolean(isOpen));
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  }

  function setupNavigation() {
    if (navToggle && mainNav) {
      navToggle.addEventListener("click", function () {
        var isOpen = mainNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });

      mainNav.addEventListener("click", function (event) {
        var link = event.target && event.target.closest ? event.target.closest("a") : null;
        if (!link) {
          return;
        }
        setNavOpen(false);
      });

      document.addEventListener("click", function (event) {
        if (!mainNav.classList.contains("is-open")) {
          return;
        }
        var target = event.target;
        if (mainNav.contains(target) || navToggle.contains(target)) {
          return;
        }
        setNavOpen(false);
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
          setNavOpen(false);
        }
      });
    }

    var path = (window.location.pathname || "").toLowerCase();
    var current = path.split("/").pop() || "index.html";
    if (current.indexOf(".html") === -1) {
      current = "index.html";
    }

    var links = document.querySelectorAll(".main-nav a");
    links.forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      var normalized = href.split("?")[0].split("#")[0];
      if (normalized === current) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  setupNavigation();

  var products = [
    {
      id: "mdf-raw-16",
      title: "ورق MDF خام 16 میل",
      brand: "ایرانی",
      category: "MDF خام",
      thickness: "16 میلی متر",
      size: "183×366",
      finish: "خام",
      shortSpec: "مناسب کابینت و دکور",
      image: "assets/images/خام.jpg",
      images: ["assets/images/خام.jpg", "assets/images/خام.jpg"],
      features: ["کیفیت یکنواخت برای برش", "مناسب روکش و رنگ", "کاربردی برای کابینت و دکور"],
      description: "این محصول نمونه است تا ساختار صفحه آماده باشد. بعدا مشخصات دقیق، قیمت و تصاویر واقعی جایگزین می شود."
    },
    {
      id: "mdf-veneer-wood",
      title: "MDF روکش دار طرح چوب",
      brand: "ترک",
      category: "MDF روکش دار",
      thickness: "16 میلی متر",
      size: "183×366",
      finish: "روکش طرح چوب",
      shortSpec: "ظاهر گرم برای فضاهای داخلی",
      image: "assets/images/طرح چوب.jpg",
      images: ["assets/images/طرح چوب.jpg", "assets/images/طرح چوب.jpg"],
      features: ["ظاهر مشابه چوب طبیعی", "تمیزکاری ساده", "مناسب کمد و دکور"],
      description: "برای پروژه هایی که ظاهر چوبی می خواهند و در عین حال اجرای ساده تر لازم است."
    },
    {
      id: "highgloss-white",
      title: "هایگلاس سفید براق",
      brand: "چینی",
      category: "هایگلاس",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "براق",
      shortSpec: "سبک مدرن و روشن",
      image: null,
      features: ["سطح براق و مدرن", "مناسب سبک مینیمال", "ترکیب خوب با یراق آرام‌بند"],
      description: "یک گزینه محبوب برای کابینت های مدرن با سطح براق و تمیز."
    },
    {
      id: "pvc-moisture",
      title: "PVC ضد رطوبت",
      brand: "ایرانی",
      category: "PVC",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "مقاوم",
      shortSpec: "مناسب محیط های مرطوب",
      image: "assets/images/ضد_رطوبت.jpg",
      images: ["assets/images/ضد_رطوبت.jpg", "assets/images/ضد_رطوبت.jpg"],
      features: ["مقاوم در برابر رطوبت", "مناسب سرویس و آشپزخانه", "نگهداری ساده"],
      description: "برای فضاهایی که مقاومت در برابر رطوبت اهمیت دارد."
    },
    {
      id: "hardware-drawer-softclose",
      title: "ریل آرام بند کشویی",
      brand: "متنوع",
      category: "یراق آلات",
      thickness: "-",
      size: "-",
      finish: "آرام بند",
      shortSpec: "حرکت نرم برای کشو",
      image: null,
      features: ["حرکت نرم و بی‌صدا", "دوام مناسب مصرف روزانه", "نصب استاندارد"],
      description: "ریل نمونه برای نمایش ساختار یراق آلات در سایت. بعدا مدل ها و برندهای واقعی اضافه می شود."
    },
    {
      id: "hardware-hinge-softclose",
      title: "لولا آرام بند کابینت",
      brand: "ترک",
      category: "یراق آلات",
      thickness: "-",
      size: "-",
      finish: "آرام بند",
      shortSpec: "دوام بالا برای درب کابینت",
      image: null,
      features: ["آرام‌بند", "تنظیم‌پذیر", "مناسب درب‌های کابینت"],
      description: "لولا نمونه برای نمایش ساختار اطلاعات محصول و مسیر تماس برای مشاوره."
    },
    {
      id: "tools-saw-blade",
      title: "تیغ اره MDF",
      brand: "چینی",
      category: "ابزار و تجهیزات",
      thickness: "-",
      size: "قطر 30 سانت",
      finish: "کاربردی",
      shortSpec: "مناسب برش تمیز",
      image: null,
      features: ["برش تمیز", "مناسب MDF", "کاربردی برای کارگاه"],
      description: "محصول نمونه از دسته ابزار و تجهیزات برای کامل شدن مسیرهای سایت."
    },
    {
      id: "mdf-raw-18",
      title: "ورق MDF خام 18 میل",
      brand: "ایرانی",
      category: "MDF خام",
      thickness: "18 میلی متر",
      size: "183×366",
      finish: "خام",
      shortSpec: "برای پروژه های سنگین تر",
      image: null,
      features: ["استحکام بالاتر", "مناسب صفحات بزرگ", "قابل روکش"],
      description: "برای برخی بخش ها که استحکام بیشتری نیاز است، ضخامت بالاتر انتخاب می شود."
    },
    {
      id: "mdf-raw-8",
      title: "ورق MDF خام 8 میل",
      brand: "ایرانی",
      category: "MDF خام",
      thickness: "8 میلی متر",
      size: "183×366",
      finish: "خام",
      shortSpec: "سبک تر برای پشت کار و دیواره",
      image: null,
      features: ["سبک و کاربردی", "مناسب پشت کار", "برش آسان"],
      description: "مدل نمونه برای تکمیل لیست محصولات و تست صفحه بندی."
    },
    {
      id: "mdf-raw-25",
      title: "ورق MDF خام 25 میل",
      brand: "ترک",
      category: "MDF خام",
      thickness: "25 میلی متر",
      size: "183×366",
      finish: "خام",
      shortSpec: "برای صفحات مقاوم و سنگین",
      image: null,
      features: ["ضخامت بالا", "مناسب کانتر و صفحات", "دوام مناسب"],
      description: "مدل نمونه برای تکمیل ساختار صفحه."
    },
    {
      id: "mdf-veneer-walnut",
      title: "MDF روکش دار گردویی",
      brand: "ترک",
      category: "MDF روکش دار",
      thickness: "16 میلی متر",
      size: "183×366",
      finish: "روکش گردویی",
      shortSpec: "رنگ گرم برای دکور",
      image: null,
      features: ["طرح گرم و کلاسیک", "مناسب دکور", "قابل ترکیب با رنگ روشن"],
      description: "مدل نمونه برای نمایش دسته روکش دار."
    },
    {
      id: "mdf-veneer-oak",
      title: "MDF روکش دار بلوطی",
      brand: "ایرانی",
      category: "MDF روکش دار",
      thickness: "16 میلی متر",
      size: "183×366",
      finish: "روکش بلوط",
      shortSpec: "ظاهر طبیعی و کاربردی",
      image: null,
      features: ["مناسب کمد و دیوارکوب", "نگهداری آسان", "هماهنگ با سبک مدرن"],
      description: "مدل نمونه برای تکمیل لیست."
    },
    {
      id: "highgloss-gray",
      title: "هایگلاس طوسی براق",
      brand: "چینی",
      category: "هایگلاس",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "براق",
      shortSpec: "انتخاب محبوب برای کابینت",
      image: null,
      features: ["ظاهر مدرن", "مناسب سبک مینیمال", "ترکیب با صفحه روشن"],
      description: "مدل نمونه برای کامل شدن دسته هایگلاس."
    },
    {
      id: "highgloss-black",
      title: "هایگلاس مشکی براق",
      brand: "ترک",
      category: "هایگلاس",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "براق",
      shortSpec: "لوکس و خاص برای جزئیات",
      image: null,
      features: ["مناسب جزئیات لوکس", "ترکیب با نورپردازی", "نیازمند نگهداری دقیق‌تر"],
      description: "مدل نمونه برای نمایش تنوع رنگ."
    },
    {
      id: "pvc-white-matte",
      title: "PVC سفید مات",
      brand: "ایرانی",
      category: "PVC",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "مات",
      shortSpec: "ظاهر ساده و مقاوم",
      image: null,
      features: ["مقاوم در برابر رطوبت", "ظاهر ساده", "مناسب فضاهای پرتردد"],
      description: "مدل نمونه برای نمایش تنوع PVC."
    },
    {
      id: "hardware-handle-modern",
      title: "دستگیره کابینت مدرن",
      brand: "چینی",
      category: "یراق آلات",
      thickness: "-",
      size: "192 میلی متر",
      finish: "مات",
      shortSpec: "ظاهر مینیمال و کاربردی",
      image: null,
      features: ["نصب آسان", "ظاهر مدرن", "مناسب کابینت و کمد"],
      description: "محصول نمونه برای تکمیل صفحه بندی."
    },
    {
      id: "hardware-screw-set",
      title: "ست پیچ و اتصالات MDF",
      brand: "متنوع",
      category: "یراق آلات",
      thickness: "-",
      size: "متنوع",
      finish: "کاربردی",
      shortSpec: "برای مونتاژ سریع و مطمئن",
      image: null,
      features: ["مناسب مونتاژ", "کاربردی", "تنوع سایز"],
      description: "محصول نمونه برای نمایش ساختار."
    },
    {
      id: "tools-edge-banding",
      title: "نوار PVC لبه (رول)",
      brand: "ایرانی",
      category: "ابزار و تجهیزات",
      thickness: "-",
      size: "رول 50 متری",
      finish: "مات",
      shortSpec: "لبه‌کاری تمیز و یکدست",
      image: null,
      features: ["لبه‌کاری تمیز", "تنوع رنگ", "دوام مناسب"],
      description: "مدل نمونه برای کامل شدن لیست."
    },
    {
      id: "tools-glue",
      title: "چسب لبه‌چسبان MDF",
      brand: "ترک",
      category: "ابزار و تجهیزات",
      thickness: "-",
      size: "1 کیلو",
      finish: "کاربردی",
      shortSpec: "برای اتصال مطمئن نوار",
      image: null,
      features: ["اتصال مناسب", "کارگاه‌پسند", "کاربردی"],
      description: "مدل نمونه برای تکمیل ساختار."
    }
  ];

  var projects = [
    {
      id: "proj-kitchen-modern-18",
      title: "پروژه آشپزخانه سبک مدرن",
      type: "کابینت آشپزخانه",
      area: 18,
      image: "assets/images/خام.jpg",
      location: "تهران",
      durationWeeks: 3,
      beforeImage: "assets/images/طرح چوب.jpg",
      afterImage: "assets/images/خام.jpg",
      shortText: "ترکیب متریال روشن با یراق آلات آرام بند برای استفاده روزمره.",
      description: "یک پروژه نمونه برای نمایش ساختار صفحه. در نسخه نهایی، تصاویر واقعی و جزئیات اجرایی جایگزین می‌شود.",
      materials: ["ورق MDF", "هایگلاس", "یراق آلات آرام بند"],
      summary: "تمرکز این پروژه روی نظم، نور و انتخاب متریال مناسب برای استفاده روزمره بوده است."
    },
    {
      id: "proj-closet-wood-12",
      title: "کمد با روکش طرح چوب",
      type: "کمد دیواری",
      area: 12,
      image: "assets/images/طرح چوب.jpg",
      location: "کرج",
      durationWeeks: 2,
      beforeImage: "assets/images/خام.jpg",
      afterImage: "assets/images/طرح چوب.jpg",
      shortText: "طراحی کاربردی با فضای تقسیم بندی و رنگ گرم برای اتاق خواب.",
      description: "این پروژه نمونه برای تکمیل ساختار صفحه پروژه‌ها است و بعداً با توضیحات واقعی تکمیل می‌شود.",
      materials: ["MDF روکش دار", "یراق آلات کمد", "دستگیره"],
      summary: "طراحی با هدف افزایش فضای ذخیره‌سازی و هماهنگی رنگی انجام شده است."
    },
    {
      id: "proj-office-minimal-24",
      title: "دکور اداری مینیمال",
      type: "فضای اداری",
      area: 24,
      image: null,
      location: "تهران",
      durationWeeks: 4,
      beforeImage: null,
      afterImage: null,
      shortText: "ترکیب رنگ خنثی با جزئیات فلزی برای ظاهر حرفه ای و مدرن.",
      description: "پروژه نمونه برای نمایش دسته‌بندی‌های پروژه. تصاویر و جزئیات واقعی در آینده اضافه می‌شود.",
      materials: ["MDF", "روکش طرح چوب", "متریال مکمل"],
      summary: "نتیجه نهایی یک فضای مینیمال و کاربردی برای محیط اداری است."
    },
    {
      id: "proj-kitchen-classic-20",
      title: "کابینت با جزئیات قاب دار",
      type: "کابینت آشپزخانه",
      area: 20,
      image: null,
      location: "شهریار",
      durationWeeks: 4,
      beforeImage: null,
      afterImage: null,
      shortText: "انتخاب متریال و یراق مناسب برای دوام بالا و ظاهر کلاسیک.",
      description: "پروژه نمونه برای کابینت کلاسیک. در نسخه نهایی، نمونه‌کار واقعی و مشخصات دقیق نمایش داده می‌شود.",
      materials: ["MDF", "روکش", "یراق آلات"],
      summary: "این پروژه بر پایه طراحی قاب‌دار و جزئیات کلاسیک تعریف شده است."
    },
    {
      id: "proj-decor-tvwall-6",
      title: "تی وی وال با ترکیب متریال",
      type: "دکور",
      area: 6,
      image: null,
      location: "تهران",
      durationWeeks: 1,
      beforeImage: null,
      afterImage: null,
      shortText: "چیدمان ساده با نورپردازی ملایم و جزئیات چوبی.",
      description: "نمونه برای نمایش دکور. بعداً تصویر واقعی و توضیحات دقیق جایگزین می‌شود.",
      materials: ["MDF روکش دار", "متریال دکور", "نورپردازی"],
      summary: "ترکیب متریال با نورپردازی ملایم برای ایجاد یک نقطه کانونی در فضا."
    },
    {
      id: "proj-decor-entry-8",
      title: "کمد و جاکفشی ورودی",
      type: "دکور",
      area: 8,
      image: null,
      location: "پردیس",
      durationWeeks: 2,
      beforeImage: null,
      afterImage: null,
      shortText: "طراحی کاربردی برای نظم دهی، با متریال مقاوم و ساده.",
      description: "پروژه نمونه ورودی. اطلاعات و تصاویر واقعی بعداً تکمیل می‌شود.",
      materials: ["MDF", "یراق آلات", "روکش مقاوم"],
      summary: "تمرکز روی نظم‌دهی ورودی و استفاده از متریال مقاوم برای استفاده روزانه."
    }
  ];

  function normalizeText(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function getQueryParam(name) {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get(name);
    } catch (e) {
      return null;
    }
  }

  function parseThicknessValue(value) {
    var raw = String(value || "");
    var match = raw.match(/(\d+(?:[.,]\d+)?)/);
    if (!match) {
      return null;
    }
    return Number(String(match[1]).replace(",", "."));
  }

  function createProductCard(product) {
    var card = document.createElement("article");
    card.className = "product-card";

    var media = document.createElement("div");
    media.className = "product-media";
    if (product.image) {
      var img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.setAttribute("aria-hidden", "true");
    }

    var body = document.createElement("div");
    body.className = "product-body";

    var brand = document.createElement("p");
    brand.className = "product-brand";
    brand.textContent = "برند: " + product.brand;

    var title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.title;

    var spec = document.createElement("p");
    spec.className = "product-spec";
    spec.textContent = product.shortSpec;

    var link = document.createElement("a");
    link.className = "btn btn-primary product-cta";
    link.href = "product-detail.html?id=" + encodeURIComponent(product.id);
    link.textContent = "مشاهده";

    body.appendChild(brand);
    body.appendChild(title);
    body.appendChild(spec);
    body.appendChild(link);

    card.appendChild(media);
    card.appendChild(body);

    return card;
  }

  function createProjectCard(project) {
    var card = document.createElement("article");
    card.className = "project-card";

    var media = document.createElement("div");
    media.className = "project-media";
    if (project.image) {
      var img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.setAttribute("aria-hidden", "true");
    }

    var body = document.createElement("div");
    body.className = "project-body";

    var meta = document.createElement("p");
    meta.className = "project-meta";
    meta.textContent = project.type + " • " + project.area + " متر";

    var title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    var text = document.createElement("p");
    text.className = "project-text";
    text.textContent = project.shortText;

    var actions = document.createElement("div");
    actions.className = "card-actions";

    var detailLink = document.createElement("a");
    detailLink.className = "btn btn-primary btn-sm";
    detailLink.href = "project-detail.html?id=" + encodeURIComponent(project.id);
    detailLink.textContent = "جزئیات";

    var contactLink = document.createElement("a");
    contactLink.className = "btn btn-outline btn-sm";
    contactLink.href = "contact.html";
    contactLink.textContent = "درخواست مشاوره";

    actions.appendChild(detailLink);
    actions.appendChild(contactLink);

    body.appendChild(meta);
    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(actions);

    card.appendChild(media);
    card.appendChild(body);

    return card;
  }

  function renderProductsPage() {
    var grid = document.getElementById("productsGrid");
    if (!grid) {
      return;
    }

    var searchInput = document.getElementById("productSearch");
    var sortSelect = document.getElementById("productSort");
    var brandSelect = document.getElementById("brandFilter");
    var chipsWrap = document.getElementById("categoryChips");
    var resultsMeta = document.getElementById("resultsMeta");
    var emptyState = document.getElementById("emptyState");
    var paginationEl = document.getElementById("productsPagination");
    var resetBtn = document.getElementById("resetProductFilters");

    var activeCategory = "all";
    var pageSize = 9;
    var currentPage = 1;

    function activateCategory(categoryValue) {
      if (!categoryValue) {
        return;
      }
      activeCategory = categoryValue;
      if (!chipsWrap) {
        return;
      }
      var btn = chipsWrap.querySelector('.chip[data-category="' + categoryValue.replace(/"/g, '\\"') + '"]');
      if (btn) {
        var buttons = chipsWrap.querySelectorAll(".chip");
        buttons.forEach(function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");
      }
    }

    function getFilteredProducts() {
      var term = normalizeText(searchInput ? searchInput.value : "");
      var filtered = products.slice();

      if (activeCategory !== "all") {
        filtered = filtered.filter(function (p) {
          return p.category === activeCategory;
        });
      }

      var activeBrand = brandSelect ? String(brandSelect.value || "all") : "all";
      if (activeBrand !== "all") {
        filtered = filtered.filter(function (p) {
          return p.brand === activeBrand;
        });
      }

      if (term) {
        filtered = filtered.filter(function (p) {
          var hay = normalizeText(p.title + " " + p.brand);
          return hay.indexOf(term) !== -1;
        });
      }

      var sortMode = sortSelect ? sortSelect.value : "default";
      if (sortMode === "title-asc") {
        filtered.sort(function (a, b) {
          return normalizeText(a.title).localeCompare(normalizeText(b.title), "fa");
        });
      } else if (sortMode === "title-desc") {
        filtered.sort(function (a, b) {
          return normalizeText(b.title).localeCompare(normalizeText(a.title), "fa");
        });
      } else if (sortMode === "thickness-asc" || sortMode === "thickness-desc") {
        filtered.sort(function (a, b) {
          var av = parseThicknessValue(a.thickness);
          var bv = parseThicknessValue(b.thickness);
          if (av == null && bv == null) return 0;
          if (av == null) return 1;
          if (bv == null) return -1;
          return sortMode === "thickness-asc" ? av - bv : bv - av;
        });
      }

      return filtered;
    }

    function updateActiveChip(targetButton) {
      if (!chipsWrap) {
        return;
      }

      var buttons = chipsWrap.querySelectorAll(".chip");
      buttons.forEach(function (btn) {
        btn.classList.remove("is-active");
      });
      if (targetButton) {
        targetButton.classList.add("is-active");
      }
    }

    function render() {
      var list = getFilteredProducts();
      var totalItems = list.length;
      var totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = startIndex + pageSize;
      var paged = list.slice(startIndex, endIndex);

      grid.innerHTML = "";

      paged.forEach(function (product) {
        grid.appendChild(createProductCard(product));
      });

      if (resultsMeta) {
        if (totalItems === 0) {
          resultsMeta.textContent = "";
        } else {
          resultsMeta.textContent = totalItems + " محصول • صفحه " + currentPage + " از " + totalPages;
        }
      }

      if (emptyState) {
        emptyState.hidden = totalItems !== 0;
      }

      if (paginationEl) {
        paginationEl.innerHTML = "";
        if (totalItems === 0 || totalPages === 1) {
          paginationEl.hidden = true;
          return;
        }

        paginationEl.hidden = false;

        function createPageButton(label, page, disabled, isCurrent) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "btn btn-outline btn-sm";
          btn.textContent = label;
          btn.disabled = Boolean(disabled);
          if (isCurrent) {
            btn.setAttribute("aria-current", "page");
          }
          btn.addEventListener("click", function () {
            currentPage = page;
            render();
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
          return btn;
        }

        paginationEl.appendChild(createPageButton("قبلی", Math.max(1, currentPage - 1), currentPage === 1, false));

        for (var p = 1; p <= totalPages; p += 1) {
          paginationEl.appendChild(createPageButton(String(p), p, false, p === currentPage));
        }

        paginationEl.appendChild(createPageButton("بعدی", Math.min(totalPages, currentPage + 1), currentPage === totalPages, false));
      }
    }

    if (chipsWrap) {
      chipsWrap.addEventListener("click", function (event) {
        var btn = event.target && event.target.closest ? event.target.closest(".chip") : null;
        if (!btn) {
          return;
        }
        activeCategory = btn.getAttribute("data-category") || "all";
        updateActiveChip(btn);
        currentPage = 1;
        render();
      });
    }

    var initialCategory = getQueryParam("category");
    if (initialCategory && initialCategory !== "all") {
      activateCategory(initialCategory);
    }

    var initialQuery = getQueryParam("q");
    if (initialQuery && searchInput) {
      searchInput.value = initialQuery;
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        currentPage = 1;
        render();
      });

      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          searchInput.value = "";
          currentPage = 1;
          render();
        }
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        currentPage = 1;
        render();
      });
    }

    if (brandSelect) {
      brandSelect.addEventListener("change", function () {
        currentPage = 1;
        render();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        if (sortSelect) sortSelect.value = "default";
        if (brandSelect) brandSelect.value = "all";
        activeCategory = "all";
        updateActiveChip(chipsWrap ? chipsWrap.querySelector('.chip[data-category="all"]') : null);
        currentPage = 1;
        render();
      });
    }

    render();
  }

  function renderProjectsPage() {
    var grid = document.getElementById("projectsGrid");
    if (!grid) {
      return;
    }

    var searchInput = document.getElementById("projectSearch");
    var sortSelect = document.getElementById("projectSort");
    var chipsWrap = document.getElementById("projectTypeChips");
    var metaEl = document.getElementById("projectsMeta");
    var emptyEl = document.getElementById("projectsEmpty");
    var resetBtn = document.getElementById("resetProjectFilters");

    var activeType = "all";

    function getFilteredProjects() {
      var term = normalizeText(searchInput ? searchInput.value : "");
      var filtered = projects.slice();

      if (activeType !== "all") {
        filtered = filtered.filter(function (p) {
          return p.type === activeType;
        });
      }

      if (term) {
        filtered = filtered.filter(function (p) {
          var hay = normalizeText(p.title + " " + p.type);
          return hay.indexOf(term) !== -1;
        });
      }

      var sortMode = sortSelect ? sortSelect.value : "default";
      if (sortMode === "area-desc") {
        filtered.sort(function (a, b) {
          return b.area - a.area;
        });
      } else if (sortMode === "area-asc") {
        filtered.sort(function (a, b) {
          return a.area - b.area;
        });
      }

      return filtered;
    }

    function updateActiveChip(targetButton) {
      if (!chipsWrap) {
        return;
      }
      var buttons = chipsWrap.querySelectorAll(".chip");
      buttons.forEach(function (btn) {
        btn.classList.remove("is-active");
      });
      if (targetButton) {
        targetButton.classList.add("is-active");
      }
    }

    function render() {
      var list = getFilteredProjects();
      grid.innerHTML = "";

      list.forEach(function (project) {
        grid.appendChild(createProjectCard(project));
      });

      if (metaEl) {
        metaEl.textContent = list.length + " پروژه نمایش داده شد.";
      }
      if (emptyEl) {
        emptyEl.hidden = list.length !== 0;
      }
    }

    if (chipsWrap) {
      chipsWrap.addEventListener("click", function (event) {
        var btn = event.target && event.target.closest ? event.target.closest(".chip") : null;
        if (!btn) {
          return;
        }
        activeType = btn.getAttribute("data-type") || "all";
        updateActiveChip(btn);
        render();
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", render);
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", render);
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        activeType = "all";
        if (searchInput) searchInput.value = "";
        if (sortSelect) sortSelect.value = "default";
        updateActiveChip(chipsWrap ? chipsWrap.querySelector('.chip[data-type="all"]') : null);
        render();
      });
    }

    render();
  }

  function renderProductDetailPage() {
    var titleEl = document.getElementById("productTitle");
    if (!titleEl) {
      return;
    }

    var id = getQueryParam("id");
    var product = products.find(function (p) {
      return p.id === id;
    });

    var layout = document.querySelector(".detail-layout");
    var notFound = document.getElementById("productNotFound");

    if (!product) {
      if (layout) {
        layout.style.display = "none";
      }
      if (notFound) {
        notFound.hidden = false;
      }
      return;
    }

    if (layout) {
      layout.style.display = "";
    }
    if (notFound) {
      notFound.hidden = true;
    }

    var heroTitle = document.getElementById("productHeroTitle");
    var heroText = document.getElementById("productHeroText");
    var breadcrumb = document.getElementById("productBreadcrumb");
    var brandEl = document.getElementById("productBrand");
    var specEl = document.getElementById("productSpec");
    var specsTable = document.getElementById("productSpecsTable");
    var featuresEl = document.getElementById("productFeatures");
    var descEl = document.getElementById("productDescription");
    var priceInquiryBtn = document.getElementById("productPriceInquiry");
    var buyConsultBtn = document.getElementById("productBuyConsult");

    if (breadcrumb) {
      breadcrumb.textContent = "خانه / محصولات / " + product.title;
    }

    if (heroTitle) {
      heroTitle.textContent = product.title;
    }

    if (heroText) {
      heroText.textContent = "دسته: " + product.category + " • برند: " + product.brand;
    }

    if (brandEl) {
      brandEl.textContent = "برند: " + product.brand;
    }

    titleEl.textContent = product.title;

    if (specEl) {
      specEl.textContent = product.shortSpec;
    }

    var items = [
      ["دسته‌بندی", product.category],
      ["برند", product.brand],
      ["ضخامت", product.thickness],
      ["ابعاد", product.size],
      ["روکش / سطح", product.finish]
    ];

    if (specsTable) {
      var tbody = specsTable.querySelector("tbody");
      if (tbody) {
        tbody.innerHTML = "";
        items.forEach(function (pair) {
          var tr = document.createElement("tr");
          var tdKey = document.createElement("td");
          var tdVal = document.createElement("td");
          tdKey.textContent = pair[0];
          tdVal.textContent = pair[1];
          tr.appendChild(tdKey);
          tr.appendChild(tdVal);
          tbody.appendChild(tr);
        });
      }
    }

    if (featuresEl) {
      featuresEl.innerHTML = "";
      var features = Array.isArray(product.features) ? product.features : [];
      if (features.length === 0) {
        var liEmpty = document.createElement("li");
        liEmpty.textContent = "در نسخه نهایی، ویژگی‌های محصول تکمیل می‌شود.";
        featuresEl.appendChild(liEmpty);
      } else {
        features.forEach(function (f) {
          var li = document.createElement("li");
          li.textContent = f;
          featuresEl.appendChild(li);
        });
      }
    }

    if (descEl) {
      descEl.textContent = product.description;
    }

    var mediaEl = document.getElementById("productMedia");
    var thumbsEl = document.getElementById("productThumbs");
    var images = [];
    if (Array.isArray(product.images) && product.images.length) {
      images = product.images.slice();
    } else if (product.image) {
      images = [product.image];
    }

    if (mediaEl) {
      mediaEl.innerHTML = "";
      if (images[0]) {
        var mainImg = document.createElement("img");
        mainImg.src = images[0];
        mainImg.alt = product.title;
        mainImg.loading = "lazy";
        mediaEl.appendChild(mainImg);

        if (thumbsEl) {
          thumbsEl.innerHTML = "";
          if (images.length > 1) {
            thumbsEl.hidden = false;
            images.forEach(function (src, index) {
              var btn = document.createElement("button");
              btn.type = "button";
              btn.className = "gallery-thumb";
              btn.setAttribute("aria-label", "تصویر " + (index + 1));

              var tImg = document.createElement("img");
              tImg.src = src;
              tImg.alt = product.title;
              tImg.loading = "lazy";
              btn.appendChild(tImg);

              if (index === 0) {
                btn.classList.add("is-active");
              }

              btn.addEventListener("click", function () {
                mainImg.src = src;
                var all = thumbsEl.querySelectorAll(".gallery-thumb");
                all.forEach(function (b) {
                  b.classList.remove("is-active");
                });
                btn.classList.add("is-active");
              });

              thumbsEl.appendChild(btn);
            });
          } else {
            thumbsEl.hidden = true;
          }
        }
      } else if (thumbsEl) {
        thumbsEl.hidden = true;
      }
    }

    // محصولات مرتبط
    var relatedGrid = document.getElementById("relatedProductsGrid");
    var relatedSection = document.getElementById("relatedSection");
    if (relatedGrid && relatedSection) {
      var related = products.filter(function (p) {
        return p.category === product.category && p.id !== product.id;
      }).slice(0, 3);

      if (related.length > 0) {
        relatedGrid.innerHTML = "";
        related.forEach(function (p) {
          relatedGrid.appendChild(createProductCard(p));
        });
        relatedSection.hidden = false;
      } else {
        relatedSection.hidden = true;
      }
    }

    document.title = product.title + " | Soheili MDF";

    var baseMessage = "سلام. برای محصول زیر نیاز به راهنمایی دارم:\n" + product.title + "\nکد: " + product.id;
    if (priceInquiryBtn) {
      priceInquiryBtn.href = "contact.html?topic=" + encodeURIComponent("استعلام قیمت") + "&message=" + encodeURIComponent(baseMessage);
    }
    if (buyConsultBtn) {
      buyConsultBtn.href = "contact.html?topic=" + encodeURIComponent("مشاوره خرید") + "&message=" + encodeURIComponent(baseMessage);
    }
  }

  function renderProjectDetailPage() {
    var titleEl = document.getElementById("projectTitle");
    if (!titleEl) {
      return;
    }

    var id = getQueryParam("id");
    var project = projects.find(function (p) {
      return p.id === id;
    });

    var layout = document.querySelector(".detail-layout");
    var notFound = document.getElementById("projectNotFound");

    if (!project) {
      if (layout) {
        layout.style.display = "none";
      }
      if (notFound) {
        notFound.hidden = false;
      }
      return;
    }

    if (layout) {
      layout.style.display = "";
    }
    if (notFound) {
      notFound.hidden = true;
    }

    var breadcrumb = document.getElementById("projectBreadcrumb");
    var heroTitle = document.getElementById("projectHeroTitle");
    var heroText = document.getElementById("projectHeroText");
    var metaEl = document.getElementById("projectMeta");
    var descEl = document.getElementById("projectDescription");
    var materialsEl = document.getElementById("projectMaterials");
    var summaryEl = document.getElementById("projectSummary");
    var mediaEl = document.getElementById("projectMedia");
    var infoCardsEl = document.getElementById("projectInfoCards");
    var beforeCard = document.getElementById("beforeCard");
    var afterCard = document.getElementById("afterCard");
    var relatedSection = document.getElementById("relatedProjectsSection");
    var relatedGrid = document.getElementById("relatedProjectsGrid");

    if (breadcrumb) {
      breadcrumb.textContent = "خانه / پروژه ها / " + project.title;
    }

    if (heroTitle) {
      heroTitle.textContent = project.title;
    }

    if (heroText) {
      heroText.textContent = project.type + " • " + project.area + " متر";
    }

    if (metaEl) {
      metaEl.textContent = project.type + " • " + project.area + " متر";
    }

    titleEl.textContent = project.title;

    if (descEl) {
      descEl.textContent = project.description || project.shortText || "";
    }

    if (materialsEl) {
      materialsEl.innerHTML = "";
      var materials = Array.isArray(project.materials) ? project.materials : [];
      if (materials.length === 0) {
        var liEmpty = document.createElement("li");
        liEmpty.textContent = "در نسخه نهایی، لیست متریال تکمیل می‌شود.";
        materialsEl.appendChild(liEmpty);
      } else {
        materials.forEach(function (m) {
          var li = document.createElement("li");
          li.textContent = m;
          materialsEl.appendChild(li);
        });
      }
    }

    if (summaryEl) {
      summaryEl.textContent = project.summary || "";
    }

    if (mediaEl) {
      mediaEl.innerHTML = "";
      if (project.image) {
        var img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        img.loading = "lazy";
        mediaEl.appendChild(img);
      }
    }

    if (infoCardsEl) {
      infoCardsEl.innerHTML = "";
      var cards = [
        ["نوع پروژه", project.type],
        ["متراژ", project.area + " متر"],
        ["محل اجرا", project.location || "—"],
        ["زمان اجرا", project.durationWeeks ? project.durationWeeks + " هفته" : "—"]
      ];
      cards.forEach(function (pair) {
        var card = document.createElement("div");
        card.className = "info-card";
        var title = document.createElement("p");
        title.className = "info-card-title";
        title.textContent = pair[0];
        var value = document.createElement("p");
        value.className = "info-card-value";
        value.textContent = pair[1];
        card.appendChild(title);
        card.appendChild(value);
        infoCardsEl.appendChild(card);
      });
    }

    if (beforeCard) {
      var beforeImgEl = beforeCard.querySelector("img");
      if (project.beforeImage) {
        if (!beforeImgEl) {
          beforeImgEl = document.createElement("img");
          beforeImgEl.loading = "lazy";
          beforeImgEl.alt = "قبل از اجرای " + project.title;
          beforeCard.insertBefore(beforeImgEl, beforeCard.firstChild);
        }
        beforeImgEl.src = project.beforeImage;
      } else if (beforeImgEl) {
        beforeImgEl.remove();
      }
    }

    if (afterCard) {
      var afterImgEl = afterCard.querySelector("img");
      if (project.afterImage) {
        if (!afterImgEl) {
          afterImgEl = document.createElement("img");
          afterImgEl.loading = "lazy";
          afterImgEl.alt = "بعد از اجرای " + project.title;
          afterCard.insertBefore(afterImgEl, afterCard.firstChild);
        }
        afterImgEl.src = project.afterImage;
      } else if (afterImgEl) {
        afterImgEl.remove();
      }
    }

    if (relatedSection && relatedGrid) {
      var related = projects.filter(function (p) {
        return p.type === project.type && p.id !== project.id;
      }).slice(0, 3);
      if (related.length) {
        relatedGrid.innerHTML = "";
        related.forEach(function (p) {
          relatedGrid.appendChild(createProjectCard(p));
        });
        relatedSection.hidden = false;
      } else {
        relatedSection.hidden = true;
      }
    }

    document.title = project.title + " | پروژه ها | Soheili MDF";
  }

  function renderHomePage() {
    var productsGrid = document.getElementById("featuredProductsGrid");
    var projectsGrid = document.getElementById("homeProjectsGrid");

    if (productsGrid) {
      productsGrid.innerHTML = "";
      // نمایش ۶ محصول اول در صفحه اصلی
      products.slice(0, 6).forEach(function (p) {
        productsGrid.appendChild(createProductCard(p));
      });
    }

    if (projectsGrid) {
      projectsGrid.innerHTML = "";
      // نمایش ۶ پروژه اول در صفحه اصلی
      projects.slice(0, 6).forEach(function (p) {
        projectsGrid.appendChild(createProjectCard(p));
      });
    }
  }

  renderProductsPage();
  renderProjectsPage();
  renderProductDetailPage();
  renderProjectDetailPage();
  renderHomePage();

  function setupBackToTop() {
    var btn = document.createElement("button");
    btn.id = "backToTop";
    btn.className = "back-to-top";
    btn.innerHTML = "↑";
    btn.setAttribute("aria-label", "برو به بالا");
    document.body.appendChild(btn);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });

    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  setupBackToTop();

  function buildRequestText(data) {
    var parts = [];
    parts.push("درخواست مشاوره");
    parts.push("نام: " + (data.fullName || "-"));
    parts.push("شماره: " + (data.phone || "-"));
    parts.push("موضوع: " + (data.topic || "-"));
    parts.push("شهر: " + (data.city || "-"));
    parts.push("توضیحات: " + (data.message || "-"));
    return parts.join("\n");
  }

  function isValidPhone(value) {
    var v = String(value || "").trim();
    if (!v) {
      return false;
    }
    return /^(\+?\d{10,15}|0\d{10})$/.test(v);
  }

  function safeJsonParse(value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  function renderContactPage() {
    var form = document.getElementById("consultationForm");
    if (!form) {
      return;
    }

    var statusEl = document.getElementById("formStatus");
    var copyBtn = document.getElementById("copyRequest");
    var whatsappBtn = document.getElementById("whatsappRequest");
    var lastRequestText = "";

    function setStatus(text, type) {
      if (statusEl) {
        statusEl.classList.remove("is-success", "is-error");
        if (type === "success") {
          statusEl.classList.add("is-success");
        } else if (type === "error") {
          statusEl.classList.add("is-error");
        }
        statusEl.textContent = text;
      }
    }

    function updateWhatsappLink(text) {
      if (!whatsappBtn) return;
      // شماره واتساپ نمونه (باید با شماره واقعی جایگزین شود)
      var phoneNumber = "989120000000"; 
      var encodedText = encodeURIComponent(text);
      whatsappBtn.href = "https://wa.me/" + phoneNumber + "?text=" + encodedText;
      whatsappBtn.hidden = false;
    }

    function copyText(text) {
      if (!text) {
        return Promise.reject(new Error("empty"));
      }

      if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        return navigator.clipboard.writeText(text);
      }

      return new Promise(function (resolve, reject) {
        try {
          var textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.setAttribute("readonly", "true");
          textarea.style.position = "fixed";
          textarea.style.top = "-9999px";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          textarea.setSelectionRange(0, textarea.value.length);
          var ok = document.execCommand("copy");
          document.body.removeChild(textarea);
          if (ok) {
            resolve();
          } else {
            reject(new Error("copy_failed"));
          }
        } catch (e) {
          reject(e);
        }
      });
    }

    function getFormData() {
      var fd = new FormData(form);
      return {
        fullName: String(fd.get("fullName") || "").trim(),
        phone: String(fd.get("phone") || "").trim(),
        topic: String(fd.get("topic") || "").trim(),
        city: String(fd.get("city") || "").trim(),
        message: String(fd.get("message") || "").trim()
      };
    }

    (function prefillFromQuery() {
      var topic = getQueryParam("topic");
      var message = getQueryParam("message");
      if (!topic && !message) {
        return;
      }
      var topicField = form.querySelector('select[name="topic"]');
      var messageField = form.querySelector('textarea[name="message"]');
      if (topicField && topic) {
        topicField.value = topic;
      }
      if (messageField && message) {
        messageField.value = message;
      }
      setStatus("فرم با اطلاعات اولیه پر شد. در صورت نیاز ویرایش کنید و سپس ثبت کنید.", "success");
    })();

    function saveRequest(payload) {
      try {
        var raw = localStorage.getItem("soheili_requests");
        var list = safeJsonParse(raw);
        if (!Array.isArray(list)) {
          list = [];
        }
        list.unshift(payload);
        localStorage.setItem("soheili_requests", JSON.stringify(list.slice(0, 50)));
      } catch (e) {
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = getFormData();
      if (!data.fullName) {
        setStatus("لطفا نام و نام خانوادگی را وارد کنید.", "error");
        return;
      }
      if (!isValidPhone(data.phone)) {
        setStatus("لطفا شماره تماس معتبر وارد کنید.", "error");
        return;
      }
      if (!data.topic) {
        setStatus("لطفا موضوع را انتخاب کنید.", "error");
        return;
      }
      if (!data.message) {
        setStatus("لطفا توضیحات را وارد کنید.", "error");
        return;
      }

      var now = new Date();
      var payload = {
        fullName: data.fullName,
        phone: data.phone,
        topic: data.topic,
        city: data.city,
        message: data.message,
        createdAt: now.toISOString()
      };

      saveRequest(payload);
      lastRequestText = buildRequestText(data);
      updateWhatsappLink(lastRequestText);
      setStatus("درخواست شما ثبت شد. برای ارسال در واتساپ یا پیام رسان، از دکمه کپی استفاده کنید.", "success");
      form.reset();
    });

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var textToCopy = lastRequestText;
        if (!textToCopy) {
          var data = getFormData();
          if (!data.fullName || !data.phone || !data.topic || !data.message) {
            setStatus("اول فرم را کامل پر کنید یا یک بار ثبت کنید، سپس کپی را بزنید.", "error");
            return;
          }
          if (!isValidPhone(data.phone)) {
            setStatus("لطفا شماره تماس معتبر وارد کنید.", "error");
            return;
          }
          textToCopy = buildRequestText(data);
          updateWhatsappLink(textToCopy);
        }

        copyText(textToCopy).then(function () {
          setStatus("متن درخواست کپی شد.", "success");
        }).catch(function () {
          setStatus("کپی انجام نشد. لطفا دستی انتخاب و کپی کنید.", "error");
        });
      });
    }
  }

  renderContactPage();
});
