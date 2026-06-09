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
      brand: "متنوع",
      category: "MDF خام",
      thickness: "16 میلی متر",
      size: "183×366",
      finish: "خام",
      shortSpec: "مناسب کابینت و دکور",
      image: "assets/images/خام.jpg",
      description: "این محصول نمونه است تا ساختار صفحه آماده باشد. بعدا مشخصات دقیق، قیمت و تصاویر واقعی جایگزین می شود."
    },
    {
      id: "mdf-veneer-wood",
      title: "MDF روکش دار طرح چوب",
      brand: "متنوع",
      category: "MDF روکش دار",
      thickness: "16 میلی متر",
      size: "183×366",
      finish: "روکش طرح چوب",
      shortSpec: "ظاهر گرم برای فضاهای داخلی",
      image: "assets/images/طرح چوب.jpg",
      description: "برای پروژه هایی که ظاهر چوبی می خواهند و در عین حال اجرای ساده تر لازم است."
    },
    {
      id: "highgloss-white",
      title: "هایگلاس سفید براق",
      brand: "متنوع",
      category: "هایگلاس",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "براق",
      shortSpec: "سبک مدرن و روشن",
      image: "assets/images/products/highgloss-white.jpg",
      description: "یک گزینه محبوب برای کابینت های مدرن با سطح براق و تمیز."
    },
    {
      id: "pvc-moisture",
      title: "PVC ضد رطوبت",
      brand: "متنوع",
      category: "PVC",
      thickness: "16 میلی متر",
      size: "122×280",
      finish: "مقاوم",
      shortSpec: "مناسب محیط های مرطوب",
      image: "assets/images/ضد_رطوبت.jpg",
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
      image: "assets/images/products/hardware-drawer.jpg",
      description: "ریل نمونه برای نمایش ساختار یراق آلات در سایت. بعدا مدل ها و برندهای واقعی اضافه می شود."
    },
    {
      id: "hardware-hinge-softclose",
      title: "لولا آرام بند کابینت",
      brand: "متنوع",
      category: "یراق آلات",
      thickness: "-",
      size: "-",
      finish: "آرام بند",
      shortSpec: "دوام بالا برای درب کابینت",
      image: "assets/images/products/hardware-hinge.jpg",
      description: "لولا نمونه برای نمایش ساختار اطلاعات محصول و مسیر تماس برای مشاوره."
    },
    {
      id: "tools-saw-blade",
      title: "تیغ اره MDF",
      brand: "متنوع",
      category: "ابزار و تجهیزات",
      thickness: "-",
      size: "قطر 30 سانت",
      finish: "کاربردی",
      shortSpec: "مناسب برش تمیز",
      image: "assets/images/products/tools-saw.jpg",
      description: "محصول نمونه از دسته ابزار و تجهیزات برای کامل شدن مسیرهای سایت."
    },
    {
      id: "mdf-raw-18",
      title: "ورق MDF خام 18 میل",
      brand: "متنوع",
      category: "MDF خام",
      thickness: "18 میلی متر",
      size: "183×366",
      finish: "خام",
      shortSpec: "برای پروژه های سنگین تر",
      image: "assets/images/products/mdf-raw-18.jpg",
      description: "برای برخی بخش ها که استحکام بیشتری نیاز است، ضخامت بالاتر انتخاب می شود."
    }
  ];

  var projects = [
    {
      id: "proj-kitchen-modern-18",
      title: "پروژه آشپزخانه سبک مدرن",
      type: "کابینت آشپزخانه",
      area: 18,
      image: "assets/images/projects/kitchen-modern.jpg",
      shortText: "ترکیب متریال روشن با یراق آلات آرام بند برای استفاده روزمره."
    },
    {
      id: "proj-closet-wood-12",
      title: "کمد با روکش طرح چوب",
      type: "کمد دیواری",
      area: 12,
      image: "assets/images/projects/closet-wood.jpg",
      shortText: "طراحی کاربردی با فضای تقسیم بندی و رنگ گرم برای اتاق خواب."
    },
    {
      id: "proj-office-minimal-24",
      title: "دکور اداری مینیمال",
      type: "فضای اداری",
      area: 24,
      image: "assets/images/projects/office-minimal.jpg",
      shortText: "ترکیب رنگ خنثی با جزئیات فلزی برای ظاهر حرفه ای و مدرن."
    },
    {
      id: "proj-kitchen-classic-20",
      title: "کابینت با جزئیات قاب دار",
      type: "کابینت آشپزخانه",
      area: 20,
      image: "assets/images/projects/kitchen-classic.jpg",
      shortText: "انتخاب متریال و یراق مناسب برای دوام بالا و ظاهر کلاسیک."
    },
    {
      id: "proj-decor-tvwall-6",
      title: "تی وی وال با ترکیب متریال",
      type: "دکور",
      area: 6,
      image: "assets/images/projects/tv-wall.jpg",
      shortText: "چیدمان ساده با نورپردازی ملایم و جزئیات چوبی."
    },
    {
      id: "proj-decor-entry-8",
      title: "کمد و جاکفشی ورودی",
      type: "دکور",
      area: 8,
      image: "assets/images/projects/entry-decor.jpg",
      shortText: "طراحی کاربردی برای نظم دهی، با متریال مقاوم و ساده."
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

    var contactLink = document.createElement("a");
    contactLink.className = "btn btn-outline btn-sm";
    contactLink.href = "contact.html";
    contactLink.textContent = "درخواست مشاوره";

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
    var chipsWrap = document.getElementById("categoryChips");
    var resultsMeta = document.getElementById("resultsMeta");
    var emptyState = document.getElementById("emptyState");

    var activeCategory = "all";

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
      grid.innerHTML = "";

      list.forEach(function (product) {
        grid.appendChild(createProductCard(product));
      });

      if (resultsMeta) {
        resultsMeta.textContent = list.length + " محصول نمایش داده شد.";
      }

      if (emptyState) {
        emptyState.hidden = list.length !== 0;
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
      searchInput.addEventListener("input", render);
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", render);
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
    var specsEl = document.getElementById("productSpecs");
    var descEl = document.getElementById("productDescription");

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

    if (specsEl) {
      specsEl.innerHTML = "";

      var items = [
        ["دسته بندی", product.category],
        ["ضخامت", product.thickness],
        ["ابعاد", product.size],
        ["روکش / سطح", product.finish]
      ];

      items.forEach(function (pair) {
        var li = document.createElement("li");
        li.textContent = pair[0] + ": " + pair[1];
        specsEl.appendChild(li);
      });
    }

    if (descEl) {
      descEl.textContent = product.description;
    }

    var mediaEl = document.getElementById("productMedia");
    if (mediaEl) {
      mediaEl.innerHTML = "";
      if (product.image) {
        var img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        mediaEl.appendChild(img);
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

    function setStatus(text) {
      if (statusEl) {
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
        setStatus("لطفا نام و نام خانوادگی را وارد کنید.");
        return;
      }
      if (!isValidPhone(data.phone)) {
        setStatus("لطفا شماره تماس معتبر وارد کنید.");
        return;
      }
      if (!data.topic) {
        setStatus("لطفا موضوع را انتخاب کنید.");
        return;
      }
      if (!data.message) {
        setStatus("لطفا توضیحات را وارد کنید.");
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
      setStatus("درخواست شما ثبت شد. برای ارسال در واتساپ یا پیام رسان، از دکمه کپی استفاده کنید.");
      form.reset();
    });

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var textToCopy = lastRequestText;
        if (!textToCopy) {
          var data = getFormData();
          if (!data.fullName || !data.phone || !data.topic || !data.message) {
            setStatus("اول فرم را کامل پر کنید یا یک بار ثبت کنید، سپس کپی را بزنید.");
            return;
          }
          if (!isValidPhone(data.phone)) {
            setStatus("لطفا شماره تماس معتبر وارد کنید.");
            return;
          }
          textToCopy = buildRequestText(data);
          updateWhatsappLink(textToCopy);
        }

        copyText(textToCopy).then(function () {
          setStatus("متن درخواست کپی شد.");
        }).catch(function () {
          setStatus("کپی انجام نشد. لطفا دستی انتخاب و کپی کنید.");
        });
      });
    }
  }

  renderContactPage();
});
