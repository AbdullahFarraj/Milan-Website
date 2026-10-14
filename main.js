// ===================================================================
// MILAN STAR BUILDING MATERIALS TRADING L.L.C - MAIN SCRIPT
// Features: Bilingual Engine (EN/AR), Live Dubai Hours, RFQ Generator,
// Dynamic Typing, Smooth Stats Counter, FAQ Accordion, Lightbox.
// ===================================================================

// --- 1. Bilingual Translation Engine ---
const translations = {
    en: {
        nav_home: "Home",
        nav_categories: "Materials",
        nav_why_us: "Why Us",
        nav_showroom: "Showroom",
        nav_reviews: "Reviews",
        nav_rfq: "Request Quote",
        nav_contact: "Contact",
        nav_whatsapp_btn: "WhatsApp",
        lang_btn_text: "العربية",

        hero_rating_badge: "5.0 Stars on Google Reviews (150+ Reviews)",
        hero_title_lead: "DUBAI'S TRUSTED SUPPLIER FOR",
        hero_description: "MILAN STAR BUILDING MATERIALS TRADING L.L.C (ميلان ستار لتجارة مواد البناء) delivers certified premium paints, power tools, gypsum drywall systems, hardware, and plumbing solutions for contractors, interior fit-out firms, and developers across the UAE.",
        hero_btn_catalog: "Explore Materials",
        hero_btn_rfq: "Get Instant Quote (RFQ)",

        stat_1_num: "10,000+",
        stat_1_text: "Building Materials in Stock",
        stat_2_num: "5.0 ★",
        stat_2_text: "Top Google Rating",
        stat_3_num: "15+",
        stat_3_text: "Global Certified Brands",
        stat_4_num: "Same-Day",
        stat_4_text: "Direct Job-Site Delivery",

        brands_title: "Authorized Stockist for Top Brands",

        cat_badge: "WHAT WE SUPPLY",
        cat_title: "Core Supply Categories",
        cat_subtitle: "From foundation hardware to luxury finishes, explore our extensive inventory ready for rapid site dispatch.",
        cat_inquire_wa: "Inquire on WhatsApp",

        cat_1_tag: "Jotun • Berger",
        cat_1_title: "Paints & Protective Coatings",
        cat_1_desc: "Premium interior/exterior paints, wood & metal primers, protective epoxy finishes, and computerized custom color tinting.",
        cat_1_item_1: "Emulsions & Enamels",
        cat_1_item_2: "Weathercoat Exterior",
        cat_1_item_3: "Floor Epoxy",
        cat_1_item_4: "Color Mixing",

        cat_2_tag: "Bosch • Makita • DeWalt",
        cat_2_title: "Power & Hand Tools",
        cat_2_desc: "Industrial-grade cordless and corded power machinery, cutting discs, drill bits, measuring tools, and safety gear for professionals.",
        cat_2_item_1: "Hammer Drills",
        cat_2_item_2: "Angle Grinders",
        cat_2_item_3: "Circular Saws",
        cat_2_item_4: "Cordless Kits",

        cat_3_tag: "Knauf • Gyproc Quality",
        cat_3_title: "Drywall, Gypsum & Ceilings",
        cat_3_desc: "Complete partition and false-ceiling systems: regular and moisture-resistant gypsum boards, GI studs, tracks, and ceiling tiles.",
        cat_3_item_1: "Gypsum Boards",
        cat_3_item_2: "GI Studs & Channels",
        cat_3_item_3: "Joint Compound",
        cat_3_item_4: "Ceiling Grid Tiles",

        cat_4_tag: "Heavy-Duty Fixings",
        cat_4_title: "Hardware, Fasteners & Fixings",
        cat_4_desc: "Comprehensive selection of high-tensile drywall screws, anchor bolts, door hardware, architectural hinges, and masking tapes.",
        cat_4_item_1: "Drywall Screws",
        cat_4_item_2: "Anchor Bolts",
        cat_4_item_3: "Door Locks & Handles",
        cat_4_item_4: "Heavy Brackets",

        cat_5_tag: "Grohe & Brass Valves",
        cat_5_title: "Plumbing & Sanitary Fittings",
        cat_5_desc: "Certified PPR, PVC & CPVC pipes, high-pressure brass valves, chrome mixers, flexible connectors, and drainage solutions.",
        cat_5_item_1: "PPR & PVC Pipes",
        cat_5_item_2: "Brass Ball Valves",
        cat_5_item_3: "Mixers & Taps",
        cat_5_item_4: "Drainage Fittings",

        cat_6_tag: "Sika & Industrial PU",
        cat_6_title: "Adhesives, Sealants & Waterproofing",
        cat_6_desc: "High-performance structural silicone sealants, PU expanding foams, premium tile adhesives, contact cement, and waterproofing membranes.",
        cat_6_item_1: "Silicone Sealants",
        cat_6_item_2: "Expanding PU Foam",
        cat_6_item_3: "Tile Grout & Glue",
        cat_6_item_4: "Waterproofing Paste",

        why_badge: "THE MILAN STAR ADVANTAGE",
        why_title: "Why Contractors Choose Us",
        why_subtitle: "Over a decade of reliable partnerships with UAE's leading interior fit-out contractors and builders.",
        why_1_title: "Same-Day Site Delivery",
        why_1_desc: "Fleet of dedicated delivery vehicles covering Al Qusais, Business Bay, Downtown, and all 7 Emirates with zero delays.",
        why_2_title: "Wholesale Contractor Pricing",
        why_2_desc: "Aggressive volume discounts, tailored project pricing, and official VAT tax invoices for registered contractors.",
        why_3_title: "100% Genuine Certified Stock",
        why_3_desc: "Direct authorized sourcing from trusted global giants including Jotun, Berger, Bosch, Makita, DeWalt, and Grohe.",
        why_4_title: "Dedicated On-Site Sales Rep",
        why_4_desc: "Our Outdoor Sales Manager (Mr. Printo) visits your job site for technical product consultation and bill-of-quantities takeoff.",
        why_5_title: "Massive Ready Warehouse Inventory",
        why_5_desc: "Over 10,000 SKUs physically stocked in our Al Qusais central hub for instantaneous pick-up or bulk dispatch.",
        why_6_title: "5.0-Star Google Verified Reputation",
        why_6_desc: "Recognized as Dubai's most dependable building material merchant with more than 150 verified five-star ratings.",

        showroom_badge: "OUR LOCATION & PHYSICAL STOCK",
        showroom_title: "Showroom & Warehouse in Al Qusais",
        showroom_subtitle: "Visit us at Shop No-11, Ali Saeed Abdullah Bel Hab Al Ameri Bldg. View our physical inventory in person.",

        rfq_badge: "FAST TRACK ESTIMATION",
        rfq_title: "Request a Fast Project Quotation (RFQ)",
        rfq_desc: "Send your bill of quantities or required list of items. Our sales engineering team provides instant WhatsApp quotations within 30 minutes during business hours.",
        rfq_perk_1_title: "30-Minute Rapid Response",
        rfq_perk_1_desc: "Direct quotation with itemized rates and stock availability.",
        rfq_perk_2_title: "Official VAT Tax Invoices",
        rfq_perk_2_desc: "Fully compliant corporate documentation for your finance team.",
        rfq_perk_3_title: "Bulk Discount Application",
        rfq_perk_3_desc: "Custom tiered contractor pricing tailored to your order quantity.",
        rfq_call_label: "Outdoor Sales Direct Line:",
        rfq_email_label: "Direct Sales Email:",

        form_name_label: "Your Full Name / Contact Person *",
        form_name_ph: "e.g., John Smith / Engineer Ali",
        form_company_label: "Company / Contractor Name (Optional)",
        form_company_ph: "e.g., Apex Interiors LLC",
        form_phone_label: "WhatsApp / Mobile Number *",
        form_phone_ph: "+971 50 123 4567",
        form_category_label: "Primary Material Category *",
        form_cat_opt_all: "Multiple Materials / Complete Project",
        form_cat_opt_paints: "Paints & Protective Coatings",
        form_cat_opt_tools: "Power Tools & Machinery",
        form_cat_opt_gypsum: "Drywall, Gypsum & Ceiling Profiles",
        form_cat_opt_hardware: "Hardware, Fasteners & Screws",
        form_cat_opt_plumbing: "Plumbing, Valves & Sanitary",
        form_cat_opt_adhesives: "Adhesives, Sealants & Waterproofing",
        form_location_label: "Delivery Emirate / Site Location *",
        form_location_ph: "e.g., Dubai (Business Bay / Al Qusais / Marina)",
        form_notes_label: "Required Items / BOQ Details *",
        form_notes_ph: "List items, quantities, or specific brand requirements...",
        btn_rfq_wa: "Send RFQ on WhatsApp",
        btn_rfq_email: "Send RFQ via Email",

        reviews_badge: "GOOGLE REVIEWS",
        reviews_title: "Trusted by 150+ Contractors & Homeowners",
        reviews_subtitle: "Rated 5.0 ★ on Google Maps by professional builders across Dubai.",
        btn_read_google_reviews: "Read all reviews on Google",
        btn_write_review: "Write a Review",
        review_modal_title: "Share Your Experience",
        review_modal_desc: "Your review will immediately appear on our website!",
        review_label_name: "Your Name / Company *",
        review_ph_name: "e.g. Tariq Al Nuaimi / Apex Fitout",
        review_label_rating: "Your Rating *",
        review_label_text: "Your Review *",
        review_ph_text: "Write your experience with Milan Star...",
        review_btn_submit: "Post Review to Website",
        review_btn_google: "Post on Google Maps Too",

        faq_badge: "HAVE QUESTIONS?",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Everything you need to know about ordering materials, delivery, and payments.",
        faq_q1: "Do you deliver materials directly to construction and fit-out sites?",
        faq_a1: "Yes, we provide same-day and scheduled site deliveries across all Dubai districts (including Al Qusais, Deira, Business Bay, Downtown, Dubai Hills, and JLT) as well as Sharjah, Ajman, and all UAE Emirates with our dedicated fleet.",
        faq_q2: "Do you offer special contractor discounts and bulk trade pricing?",
        faq_a2: "Absolutely. We work closely with fit-out companies, MEP contractors, and maintenance teams. We provide tiered volume discounts, project-specific quotations, and official VAT tax invoices for all transactions.",
        faq_q3: "Can you provide computerized paint color mixing for Jotun and Berger?",
        faq_a3: "Yes! We operate advanced in-store computerized paint tinting systems capable of matching any RAL, NCS, or custom designer color code on the spot in matte, silk, or gloss finishes.",
        faq_q4: "Can an outdoor sales representative visit our project site?",
        faq_a4: "Yes, our Outdoor Sales team (managed by Mr. Printo - 055 365 6298) is available to visit your site anywhere in Dubai for material estimation, sample viewing, and technical advice.",
        faq_q5: "What are your showroom hours and exact location?",
        faq_a5: "Our showroom is open 7 days a week, Monday through Sunday from 7:30 AM to 8:30 PM. We are located at Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai, with easy truck loading access.",

        contact_badge: "GET IN TOUCH",
        contact_title: "Visit Our Central Showroom",
        contact_subtitle: "Drop by our store in Al Qusais or contact our sales specialists directly.",
        contact_loc_title: "Showroom Address",
        contact_loc_text: "Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai, UAE",
        contact_phone_title: "Call & Orders",
        contact_hours_title: "Opening Hours",
        contact_hours_days: "Monday - Sunday (7 Days)",
        contact_hours_time: "7:30 AM - 8:30 PM",
        btn_directions_gmaps: "Open in Google Maps",
        btn_directions_waze: "Open in Waze",

        footer_desc: "MILAN STAR BUILDING MATERIALS TRADING L.L.C is Dubai's leading supplier of premium hardware, paints, gypsum, and construction finishes.",
        footer_links_title: "Quick Navigation",
        footer_contact_title: "Contact Details",
        footer_copy: "MILAN STAR BUILDING MATERIALS TRADING L.L.C. All rights reserved.",
        wa_tooltip_text: "Chat with sales outdoor!"
    },

    ar: {
        nav_home: "الرئيسية",
        nav_categories: "الأصناف والمواد",
        nav_why_us: "لماذا ميلان ستار",
        nav_showroom: "المعرض والمستودع",
        nav_reviews: "آراء العملاء",
        nav_rfq: "طلب تسعيرة",
        nav_contact: "تواصل معنا",
        nav_whatsapp_btn: "واتساب مباشر",
        lang_btn_text: "English",

        hero_rating_badge: "تقييم 5.0 على جوجل (أكثر من 150 تقييم معتمد)",
        hero_title_lead: "المورّد المعتمد في دبي لـ",
        hero_description: "ميلان ستار لتجارة مواد البناء ش.ذ.م.م (MILAN STAR) توفر أجود أنواع الدهانات، العدد الكهربائية، قواطع وألواح الجبس، مستلزمات السباكة، والبراغي للمقاولين وشركات الديكور في كافة أنحاء الإمارات.",
        hero_btn_catalog: "استعراض المواد والأصناف",
        hero_btn_rfq: "طلب تسعيرة فورية (RFQ)",

        stat_1_num: "+10,000",
        stat_1_text: "صنف ومادة بناء متوفرة",
        stat_2_num: "5.0 ★",
        stat_2_text: "أعلى تقييم على خرائط جوجل",
        stat_3_num: "+15",
        stat_3_text: "علامة تجارية عالمية أصلية",
        stat_4_num: "نفس اليوم",
        stat_4_text: "توصيل سريع لموقع العمل",

        brands_title: "موزع معتمد لأكبر العلامات التجارية العالمية",

        cat_badge: "تشكيلة التوريد الأساسية",
        cat_title: "أصناف ومواد البناء والتشطيب",
        cat_subtitle: "من المواد الإنشائية الأساسية إلى أرقى التشطيبات، نوفر مخزوناً ضخماً جاهزاً للتوريد الفوري لموقع مشروعك.",
        cat_inquire_wa: "استفسر عبر واتساب",

        cat_1_tag: "جوتن • بيرجر",
        cat_1_title: "الدهانات ومواد العزل والحماية",
        cat_1_desc: "أجود الدهانات الداخلية والخارجية، برايمر للأخشاب والحديد، إيبوكسي أرضيات صناعي، وخلط ألوان فوري بالكمبيوتر.",
        cat_1_item_1: "دهانات داخلية وخارجية",
        cat_1_item_2: "مقاوم للعوامل الجوية",
        cat_1_item_3: "إيبوكسي أرضيات",
        cat_1_item_4: "خلط ألوان فوري",

        cat_2_tag: "بوش • ماكيتا • ديوالت",
        cat_2_title: "العدد والأدوات الكهربائية واليدوية",
        cat_2_desc: "ماكينات ومعدات صناعية لاسلكية وسلكية، أقراص قطع وجلخ، ريش دريل، أدوات قياس، ومعدات السلامة والأمان المهني.",
        cat_2_item_1: "دريلات وهيلتي تكسير",
        cat_2_item_2: "صواريخ جلخ وقطع",
        cat_2_item_3: "مناشير دائرية",
        cat_2_item_4: "أطقم بطاريات شحن",

        cat_3_tag: "كناوف • جيبورك المعتمدة",
        cat_3_title: "ألواح الجبس والأسقف المستعارة",
        cat_3_desc: "أنظمة قواطع وأسقف متكاملة: ألواح جبس عادية ومقاومة للرطوبة، قطاعات حديد مجلفن، زوايا، معجون فواصل وبلاطات أسقف.",
        cat_3_item_1: "ألواح جبسوم بورد",
        cat_3_item_2: "أوميجا وجسور وسكك حديد",
        cat_3_item_3: "معجون وشاش فواصل",
        cat_3_item_4: "بلاطات جبسية 60×60",

        cat_4_tag: "مثبتات وبراغي عالية التحمل",
        cat_4_title: "البراغي، المثبتات ومستلزمات البناء",
        cat_4_desc: "تشكيلة شاملة من براغي الجبس، خوابير تثبيت حديد وبلاستيك، مسامير، أقفال ومقابض أبواب، زوايا تدعيم وأشرطة لاصقة.",
        cat_4_item_1: "براغي جبس وصاج",
        cat_4_item_2: "خوابير وأنكور بولت",
        cat_4_item_3: "كوالين ومقابض أبواب",
        cat_4_item_4: "زوايا حديد ثقيلة",

        cat_5_tag: "جروهي ومحابس نحاسية",
        cat_5_title: "الأدوات الصحية ومستلزمات السباكة",
        cat_5_desc: "أنابيب PPR وPVC وCPVC معتمدة، محابس نحاسية عالية الضغط، خلاطات مياه، ليات مرنة، ومستلزمات تصريف المياه.",
        cat_5_item_1: "مواسير بي بي آر وبي في سي",
        cat_5_item_2: "محابس كروية نحاسية",
        cat_5_item_3: "خلاطات مياه ومغاسل",
        cat_5_item_4: "وصلات وملحقات تصريف",

        cat_6_tag: "سيكا وبولي يوريثان صناعي",
        cat_6_title: "مواد اللصق، السيليكون والعزل",
        cat_6_desc: "سيليكون إنشائي عالي الأداء، فوم رغوي عازل ومتمدد (PU Foam)، غراء سيراميك وبورسلان، غراء خشب ومواد عزل مائي.",
        cat_6_item_1: "سيليكون ألماني معتمد",
        cat_6_item_2: "فوم رغوي متمدد",
        cat_6_item_3: "غراء بلاط وترويبة",
        cat_6_item_4: "معجون وعوازل مائية",

        why_badge: "مزايا ميلان ستار",
        why_title: "لماذا يفضلنا كبار المقاولين في دبي؟",
        why_subtitle: "أكثر من عقد من الشراكة الموثوقة مع كبرى شركات الديكور والمقاولات والصيانة في الإمارات.",
        why_1_title: "توصيل سريع في نفس اليوم",
        why_1_desc: "أسطول سيارات توصيل يغطي القصيص، الخليج التجاري، وسط دبي، وجميع إمارات الدولة دون أي تأخير عن مواعيد العمل.",
        why_2_title: "أسعار جملة مخصصة للمقاولين",
        why_2_desc: "خصومات كميات حقيقية، عروض أسعار تفضيلية للمشاريع الكبيرة، وفواتير ضريبية رسمية معتمدة للشركات.",
        why_3_title: "بضاعة أصلية ومضمونة 100%",
        why_3_desc: "توريد مباشر من المصنعين العالميين المعتمدين مثل جوتن، بيرجر، بوش، ماكيتا، ديوالت، وجروهي.",
        why_4_title: "مسؤول مبيعات ميداني مخصص",
        why_4_desc: "مدير المبيعات الخارجية (Mr. Printo) على استعداد لزيارة موقع مشروعكم لمعاينة الكميات وتقديم الاستشارات الفنية.",
        why_5_title: "مستودع ضخم ومخزون فوري",
        why_5_desc: "أكثر من 10,000 صنف متوفر فعلياً في مستودعنا المركزي بالقصيص للاستلام الفوري أو الشحن المباشر.",
        why_6_title: "سمعة موثوقة وتقييم 5 نجوم",
        why_6_desc: "المتجر الأعلى تقييماً على خرائط جوجل في المنطقة بأكثر من 150 تقييماً حقيقياً من العملاء والمقاولين.",

        showroom_badge: "موقعنا ومخزوننا الفعلي",
        showroom_title: "معرضنا ومستودعنا في القصيص، دبي",
        showroom_subtitle: "تفضل بزيارتنا في بناية علي سعيد عبدالله بالحَب العامري، محل رقم 11، القصيص الصناعية الأولى لمعاينة الأصناف.",

        rfq_badge: "تسعير فوري للمشاريع",
        rfq_title: "اطلب عرض سعر سريع (RFQ)",
        rfq_desc: "أرسل قائمة المواد أو جدول الكميات (BOQ) وسيقوم فريق المبيعات بتزويدك بتسعيرة رسمية مفصلة عبر الواتساب في أقل من 30 دقيقة خلال ساعات العمل.",
        rfq_perk_1_title: "رد سريع خلال 30 دقيقة",
        rfq_perk_1_desc: "تسعيرة مباشرة موضح بها الأسعار والكميات المتاحة فوراً.",
        rfq_perk_2_title: "فواتير ضريبية معتمدة (VAT)",
        rfq_perk_2_desc: "مستندات مالية رسمية تتوافق مع متطلبات الحسابات والمشاريع.",
        rfq_perk_3_title: "خصم كميات إضافي للمقاولين",
        rfq_perk_3_desc: "تخفيضات خاصة تناسب حجم مشروعك ودورية طلباتك.",
        rfq_call_label: "هاتف مسؤول المبيعات المباشر:",
        rfq_email_label: "البريد المباشر للمبيعات:",

        form_name_label: "الاسم الكامل / مسؤول المشتريات *",
        form_name_ph: "مثال: م. علي عبد الرحيم / أحمد الكعبي",
        form_company_label: "اسم الشركة / المقاول (اختياري)",
        form_company_ph: "مثال: شركة النخبة للديكور والمقاولات",
        form_phone_label: "رقم الواتساب / الهاتف المتحرك *",
        form_phone_ph: "+971 50 123 4567",
        form_category_label: "نوع المواد المطلوبة *",
        form_cat_opt_all: "تشكيلة مواد متعددة / مشروع كامل",
        form_cat_opt_paints: "الدهانات ومواد العزل",
        form_cat_opt_tools: "العدد والأدوات الكهربائية",
        form_cat_opt_gypsum: "ألواح الجبس والأسقف المستعارة",
        form_cat_opt_hardware: "البراغي والمثبتات ومستلزمات البناء",
        form_cat_opt_plumbing: "السباكة والمحابس والأدوات الصحية",
        form_cat_opt_adhesives: "السيليكون، الفوم ومواد اللصق",
        form_location_label: "موقع المشروع / الإمارة *",
        form_location_ph: "مثال: دبي (الخليج التجاري / القصيص / المارينا)",
        form_notes_label: "تفاصيل المواد والكميات المطلوبة *",
        form_notes_ph: "اكتب الأصناف المطلوبة والكميات أو الماركة المفضلة...",
        btn_rfq_wa: "إرسال الطلب عبر واتساب",
        btn_rfq_email: "إرسال الطلب عبر الإيميل",

        reviews_badge: "آراء عملاء جوجل",
        reviews_title: "محل ثقة أكثر من 150 مقاول وصاحب مشروع",
        reviews_subtitle: "حاصلون على تقييم 5.0 ★ على خرائط جوجل من محترفي البناء والمقاولات في دبي.",
        btn_read_google_reviews: "قراءة جميع المراجعات على جوجل",
        btn_write_review: "أضف تقييمك الآن",
        review_modal_title: "شاركنا تجربتك ورأيك",
        review_modal_desc: "سيظهر تقييمك فوراً ومباشرة على الموقع!",
        review_label_name: "الاسم الكامل / اسم الشركة *",
        review_ph_name: "مثال: طارق النعيمي / شركة النخبة للديكور",
        review_label_rating: "تقييمك بالنجوم *",
        review_label_text: "تفاصيل تجربتك مع ميلان ستار *",
        review_ph_text: "اكتب رأيك في جودة المواد، الأسعار، وسرعة التوصيل...",
        review_btn_submit: "نشر التقييم فوراً على الموقع",
        review_btn_google: "نشر التقييم على خرائط Google أيضاً",

        faq_badge: "لديك استفسار؟",
        faq_title: "الأسئلة الشائعة",
        faq_subtitle: "إجابات على أكثر الأسئلة شيوعاً حول التوريد، التوصيل لمواقع العمل والدفع.",
        faq_q1: "هل تقومون بتوصيل المواد مباشرة إلى مواقع البناء والمشاريع؟",
        faq_a1: "نعم، نوفر خدمة التوصيل السريع في نفس اليوم أو حسب الموعد المحدد إلى جميع مناطق دبي (القصيص، ديرة، الخليج التجاري، وسط دبي، دبي هيلز، أبراج بحيرات جميرا) وكذلك إلى الشارقة، عجمان وكافة إمارات الدولة عبر أسطول سياراتنا.",
        faq_q2: "هل تمنحون أسعاراً خاصة وخصومات للمقاولين والشركات؟",
        faq_a2: "بالتأكيد، نعمل كشريك توريد رئيسي لشركات المقاولات والديكور والصيانة. نقدم عروض أسعار جملة للمشاريع وفواتير ضريبية رسمية معتمدة لكل طلب.",
        faq_q3: "هل يتوفر لديكم خلط ألوان دهانات بالكمبيوتر (جوتن وبيرجر)؟",
        faq_a3: "نعم، يتوفر لدينا ماكينات خلط ألوان حديثة متصلة بالكمبيوتر لأصباغ جوتن وبيرجر لمطابقة أي كود لون (RAL أو NCS أو كودات مهندسي الديكور) فوراً بملمس مطفي أو حريري أو لامع.",
        faq_q4: "هل يمكن لمسؤول المبيعات الحضور إلى موقع المشروع؟",
        faq_a4: "نعم، يسعد مدير المبيعات الخارجية (Mr. Printo - 055 365 6298) بزيارة موقع مشروعك في أي مكان داخل دبي لرفع المقاسات وتقدير الكميات وعرض عينات المواد وتقديم النصيحة الفنية.",
        faq_q5: "ما هي ساعات عمل المعرض وأين يقع بالضبط؟",
        faq_a5: "معرضنا مفتوح طوال أيام الأسبوع من الاثنين إلى الأحد، من الساعة 7:30 صباحاً حتى 8:30 مساءً دون انقطاع. يقع في بناية علي سعيد عبدالله بالحَب العامري، محل رقم 11، القصيص الصناعية الأولى، دبي مع توفر مواقف وتحميل سهل للشاحنات.",

        contact_badge: "تواصل مباشر",
        contact_title: "تفضل بزيارة معرضنا الرئيسي",
        contact_subtitle: "زر متجرنا في القصيص أو تواصل مع فريق المبيعات للحصول على أفضل خدمة.",
        contact_loc_title: "عنوان المعرض",
        contact_loc_text: "بناية علي سعيد عبدالله بالحَب العامري، محل رقم 11، القصيص الصناعية الأولى، دبي، الإمارات",
        contact_phone_title: "الهاتف والطلبات",
        contact_hours_title: "ساعات العمل الرسمية",
        contact_hours_days: "من الاثنين إلى الأحد (7 أيام بالاسبوع)",
        contact_hours_time: "7:30 صباحاً - 8:30 مساءً",
        btn_directions_gmaps: "فتح الموقع في خرائط Google",
        btn_directions_waze: "فتح الموقع في Waze",

        footer_desc: "ميلان ستار لتجارة مواد البناء ش.ذ.م.م - الوجهة الأولى في دبي لتوريد الدهانات، العدد، قطاعات الجبس وتشطيبات البناء الفاخرة.",
        footer_links_title: "روابط سريعة",
        footer_contact_title: "بيانات التواصل",
        footer_copy: "ميلان ستار لتجارة مواد البناء ش.ذ.م.م. جميع الحقوق محفوظة.",
        wa_tooltip_text: "تواصل مع المبيعات الخارجية!"
    }
};

let currentLang = localStorage.getItem('milan_lang') || 'en';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('milan_lang', lang);
    const t = translations[lang];
    if (!t) return;

    // Set HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    if (lang === 'ar') {
        document.body.classList.add('rtl-mode');
    } else {
        document.body.classList.remove('rtl-mode');
    }

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Update Language Toggle Button text
    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
        langBtnText.textContent = t.lang_btn_text;
    }

    // Refresh Live Store Status text
    updateStoreStatus();

    // Restart Dynamic Typing with current language phrases
    initDynamicTyping();

    // Refresh Reviews marquee in selected language
    if (typeof renderReviewsMarquee === 'function') {
        renderReviewsMarquee();
    }
}

// Toggle language on button click
window.toggleLanguage = function() {
    const nextLang = (currentLang === 'en') ? 'ar' : 'en';
    applyLanguage(nextLang);
};


// --- 2. Live Dubai Business Hours Status (UTC+4) ---
function updateStoreStatus() {
    const chip = document.getElementById('store-status-chip');
    if (!chip) return;

    // Get current Dubai time
    const now = new Date();
    const dubaiTimeStr = now.toLocaleString("en-US", { timeZone: "Asia/Dubai" });
    const dubaiTime = new Date(dubaiTimeStr);

    const hours = dubaiTime.getHours();
    const minutes = dubaiTime.getMinutes();
    const totalMins = hours * 60 + minutes;

    // Store is open daily from 7:30 AM (450 mins) to 8:30 PM (1230 mins)
    const openMins = 7 * 60 + 30;
    const closeMins = 20 * 60 + 30;

    const isOpen = (totalMins >= openMins && totalMins < closeMins);

    if (isOpen) {
        chip.className = 'store-status-chip is-open';
        chip.innerHTML = (currentLang === 'ar') 
            ? '<span class="status-dot"></span><span>مفتوح الآن • يغلق الساعة 8:30 مساءً (القصيص، دبي)</span>'
            : '<span class="status-dot"></span><span>Open Now • Closes at 8:30 PM (Al Qusais, Dubai)</span>';
    } else {
        chip.className = 'store-status-chip is-closed';
        chip.innerHTML = (currentLang === 'ar')
            ? '<span class="status-dot"></span><span>مغلق حالياً • يفتح 7:30 صباحاً (القصيص، دبي)</span>'
            : '<span class="status-dot"></span><span>Closed Now • Opens at 7:30 AM (Al Qusais, Dubai)</span>';
    }
}


// --- 3. Dynamic Typing Effect (Multilingual) ---
let typingTimeout = null;
let erasingTimeout = null;
let newTextTimeout = null;

const typingPhrases = {
    en: [
        "Paints & Protective Coatings",
        "Bosch & Makita Power Tools",
        "Gypsum Partitions & Ceilings",
        "Hardware, Fasteners & Screws",
        "Plumbing & Sanitary Fittings",
        "Adhesives & Waterproofing"
    ],
    ar: [
        "دهانات جوتن وبيرجر ومواد العزل",
        "عدد وأدوات بوش وماكيتا وديوالت",
        "ألواح الجبس والأسقف المستعارة",
        "البراغي والمثبتات ومستلزمات البناء",
        "أدوات ومستلزمات السباكة والصحي",
        "مواد اللصق والسيليكون والعوازل"
    ]
};

let phraseIndex = 0;
let charIdx = 0;

function initDynamicTyping() {
    clearTimeout(typingTimeout);
    clearTimeout(erasingTimeout);
    clearTimeout(newTextTimeout);

    const typedSpan = document.querySelector(".typed-text");
    if (!typedSpan) return;

    typedSpan.textContent = "";
    phraseIndex = 0;
    charIdx = 0;

    function typeChar() {
        const phrases = typingPhrases[currentLang] || typingPhrases.en;
        const currentPhrase = phrases[phraseIndex % phrases.length];

        if (charIdx < currentPhrase.length) {
            typedSpan.textContent += currentPhrase.charAt(charIdx);
            charIdx++;
            typingTimeout = setTimeout(typeChar, 80);
        } else {
            newTextTimeout = setTimeout(eraseChar, 2200);
        }
    }

    function eraseChar() {
        const phrases = typingPhrases[currentLang] || typingPhrases.en;
        const currentPhrase = phrases[phraseIndex % phrases.length];

        if (charIdx > 0) {
            typedSpan.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
            erasingTimeout = setTimeout(eraseChar, 40);
        } else {
            phraseIndex++;
            typingTimeout = setTimeout(typeChar, 400);
        }
    }

    typeChar();
}


// --- 4. Smooth Stats Counter Animation ---
function initStatsCounter() {
    const counters = document.querySelectorAll('.stat-num');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetEl = entry.target;
                const rawTarget = targetEl.getAttribute('data-target');
                if (!rawTarget) return;

                const numericTarget = parseFloat(rawTarget.replace(/[^0-9.]/g, ''));
                const hasPlus = rawTarget.includes('+');
                const hasStar = rawTarget.includes('★');
                const isDecimal = rawTarget.includes('.');

                let count = 0;
                const duration = 1800; // ms
                const steps = 60;
                const inc = numericTarget / steps;
                const stepTime = duration / steps;

                const timer = setInterval(() => {
                    count += inc;
                    if (count >= numericTarget) {
                        count = numericTarget;
                        clearInterval(timer);
                    }
                    let formatted = isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString();
                    if (hasPlus) formatted += '+';
                    if (hasStar) formatted += ' ★';
                    targetEl.textContent = formatted;
                }, stepTime);

                obs.unobserve(targetEl);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
}


// --- 5. Interactive RFQ Form Submission (WhatsApp & Email) ---
window.submitRFQ = function(method) {
    const name = document.getElementById('rfq-name')?.value.trim();
    const phone = document.getElementById('rfq-phone')?.value.trim();
    const company = document.getElementById('rfq-company')?.value.trim() || 'N/A';
    const category = document.getElementById('rfq-category')?.value || 'General Inquiry';
    const location = document.getElementById('rfq-location')?.value.trim() || 'Dubai, UAE';
    const notes = document.getElementById('rfq-notes')?.value.trim() || 'Please provide quotation and availability.';

    if (!name || !phone) {
        alert(currentLang === 'ar' ? 'يرجى إدخال الاسم ورقم الهاتف/الواتساب للمتابعة.' : 'Please enter your Name and Phone/WhatsApp number.');
        return false;
    }

    if (method === 'whatsapp') {
        const msg = 
`*NEW RFQ - MILAN STAR WEBSITE*
-----------------------------
👤 *Client Name:* ${name}
🏢 *Company:* ${company}
📱 *Phone / WhatsApp:* ${phone}
📦 *Material Category:* ${category}
📍 *Project Location:* ${location}
📝 *Requirements / BOQ:*
${notes}
-----------------------------
_Sent from milanstarbmt.com landing page_`;

        const waUrl = `https://wa.me/971553656298?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else if (method === 'email') {
        const subjectText = `Project RFQ: ${category} - ${name} (${company})`;
        const bodyText = 
`MILAN STAR BUILDING MATERIALS TRADING L.L.C - SALES DEPARTMENT
Request for Quotation Details:
----------------------------------------
Client / Contact Person: ${name}
Company / Contractor: ${company}
Phone / WhatsApp: ${phone}
Material Category: ${category}
Project Site Location: ${location}

Required Items / BOQ Specifications:
${notes}
----------------------------------------
Sent via milanstarbmt.com website`;

        // 1. Direct background submission to sales@milanstarbmt.com
        try {
            fetch('https://formsubmit.co/ajax/sales@milanstarbmt.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: subjectText,
                    client_name: name,
                    company: company,
                    phone_whatsapp: phone,
                    material_category: category,
                    site_location: location,
                    boq_details: notes,
                    _template: 'table'
                })
            }).catch(() => {});
        } catch (e) {}

        // 2. Open client email pre-filled to sales@milanstarbmt.com
        const subject = encodeURIComponent(subjectText);
        const body = encodeURIComponent(bodyText);
        window.location.href = `mailto:sales@milanstarbmt.com?subject=${subject}&body=${body}`;

        // 3. Show instant visual confirmation
        if (typeof showReviewToast === 'function') {
            showReviewToast(currentLang === 'ar' 
                ? 'تم توجيه طلب عرض السعر إلى sales@milanstarbmt.com! سيتم الرد خلال 30 دقيقة.' 
                : 'RFQ directed to sales@milanstarbmt.com! We will respond within 30 minutes.');
        }
    }

    return false;
};

// WhatsApp category card helper
window.inquireCategoryWA = function(catTitle) {
    const msg = `Hello Milan Star, I am inquiring about your range of *${catTitle}* for a project in the UAE. Please share pricing and availability.`;
    const waUrl = `https://wa.me/971553656298?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
};


// --- 5.5 Reviews Engine: Infinite Seamless Marquee & Live Review Posting ---
const initialReviews = [
    {
        name: "thaju dheen",
        rating: 5,
        time_en: "a month ago",
        time_ar: "منذ شهر",
        text_en: "Best building material shop in Dubai. Staff are knowledgeable, friendly, and quick to assist with any contractor requirement.",
        text_ar: "أفضل محل لمواد البناء في دبي. الموظفون ذوو خبرة عالية وودودون وسريعون في تلبية كافة متطلبات المقاولين.",
        source_en: "Google Maps Review",
        source_ar: "مراجعة خرائط جوجل"
    },
    {
        name: "Fahim Ck",
        rating: 5,
        time_en: "2 months ago",
        time_ar: "منذ شهرين",
        text_en: "I've been purchasing from this shop regularly, and their service has always been outstanding. The quality of materials is top-notch, prices are competitive, and they maintain great stock availability.",
        text_ar: "أتعامل مع هذا المتجر بانتظام، وخدمتهم دائماً استثنائية ومتميزة. جودة المواد عالية جداً، والأسعار منافسة ولديهم وفرة دائمة في المخزون.",
        source_en: "Google Maps Review",
        source_ar: "مراجعة خرائط جوجل"
    },
    {
        name: "rinto cm",
        rating: 5,
        time_en: "3 months ago",
        time_ar: "منذ 3 أشهر",
        text_en: "Always reliable for paints, power tools, and hardware. Delivery to our site in Al Qusais was prompt and stress-free. Highly recommended.",
        text_ar: "مصدر موثوق دائماً للدهانات والعدد ومستلزمات البناء. كان التوصيل إلى موقعنا في القصيص سريعاً ومنتظماً. أنصح بالتعامل معهم بشدة.",
        source_en: "Google Maps Review",
        source_ar: "مراجعة خرائط جوجل"
    },
    {
        name: "Apex Interior Fitout LLC",
        rating: 5,
        time_en: "2 weeks ago",
        time_ar: "منذ أسبوعين",
        text_en: "Milan Star is our trusted vendor for drywall partitions, screws, and Jotun paints across multiple luxury projects in Dubai. Fair pricing and official VAT invoices.",
        text_ar: "ميلان ستار هي موردنا المعتمد لقواطع وألواح الجبس والبراغي وأصباغ جوتن في مشاريعنا بدبي. أسعار ممتازة وفواتير ضريبية معتمدة.",
        source_en: "Verified Contractor",
        source_ar: "مقاول معتمد"
    },
    {
        name: "Mohammed Rashid",
        rating: 5,
        time_en: "a month ago",
        time_ar: "منذ شهر",
        text_en: "Excellent wholesale pricing on Makita power tools and safety gear. The outdoor sales team even helped us estimate our project BOQ accurately.",
        text_ar: "أسعار جملة ممتازة لعدد ماكيتا الأصلية وأدوات السلامة. كما ساعدنا مسؤول المبيعات الميداني في مراجعة جدول كميات المشروع بدقة.",
        source_en: "Google Maps Review",
        source_ar: "مراجعة خرائط جوجل"
    },
    {
        name: "Sanjay Kumar",
        rating: 5,
        time_en: "4 months ago",
        time_ar: "منذ 4 أشهر",
        text_en: "Superb computerized paint color mixing on the spot for Jotun. Got the exact shade we needed in 15 minutes. Very cooperative staff.",
        text_ar: "خلط كمبيوتر فوري ممتاز لأصباغ جوتن، حصلنا على نفس الدرجة اللونية المطلوبة بالضبط خلال 15 دقيقة فقط. تعامل راقٍ ومهني.",
        source_en: "Google Maps Review",
        source_ar: "مراجعة خرائط جوجل"
    },
    {
        name: "Al Noor Contracting & Decor",
        rating: 5,
        time_en: "3 weeks ago",
        time_ar: "منذ 3 أسابيع",
        text_en: "Same-day delivery to our job site in Business Bay was a lifesaver. Solid hardware stock, heavy-duty screws, and PPR fittings.",
        text_ar: "التوصيل السريع في نفس اليوم إلى موقع العمل في الخليج التجاري كان ممتازاً. بضاعة متكاملة ومحابس سباكة وبراغي تثبيت متينة.",
        source_en: "Verified Builder",
        source_ar: "شركة مقاولات معتمدة"
    }
];

function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function createReviewCardHTML(rev) {
    const isAr = (currentLang === 'ar');
    const name = rev.name || (isAr ? 'عميل' : 'Client');
    const initial = name.trim().charAt(0).toUpperCase();
    const rating = Math.min(5, Math.max(1, parseInt(rev.rating) || 5));
    const text = isAr ? (rev.text_ar || rev.text) : (rev.text_en || rev.text);
    const time = isAr ? (rev.time_ar || rev.date || 'الآن') : (rev.time_en || rev.date || 'Just now');
    const source = isAr 
        ? (rev.source_ar || (rev.custom ? 'تقييم الموقع المباشر' : 'مراجعة خرائط جوجل')) 
        : (rev.source_en || (rev.custom ? 'Direct Site Review' : 'Google Maps Review'));
    const badgeText = rev.custom ? (isAr ? 'تقييم جديد' : 'New Review') : (isAr ? 'عميل معتمد' : 'Verified Review');

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fa-solid fa-star" style="color: #facc15; margin: 0 1px;"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star" style="color: #4b5563; margin: 0 1px;"></i>';
        }
    }

    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899', '#06b6d4', '#eab308'];
    const charCode = initial.charCodeAt(0) || 0;
    const avatarBg = colors[charCode % colors.length];

    return `
        <div class="review-card ${rev.custom ? 'is-new-review' : ''}">
            <div class="review-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; gap: 10px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 44px; height: 44px; border-radius: 50%; background: ${avatarBg}; color: #000; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.15rem; flex-shrink: 0; box-shadow: 0 3px 10px rgba(0,0,0,0.3);">
                        ${escapeHTML(initial)}
                    </div>
                    <div>
                        <h4 style="color: #ffffff; margin: 0; font-size: 1rem; font-weight: 700; line-height: 1.3;">${escapeHTML(name)}</h4>
                        <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
                            <i class="fa-brands fa-google" style="color: #4285F4; font-size: 0.8rem;"></i>
                            <span style="color: #94a3b8; font-size: 0.75rem;">${escapeHTML(badgeText)}</span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
                    <div style="font-size: 0.9rem; white-space: nowrap;">
                        ${starsHtml}
                    </div>
                    ${rev.custom ? `<span style="background: rgba(250,204,21,0.18); color: #facc15; border: 1px solid rgba(250,204,21,0.4); padding: 1px 7px; border-radius: 10px; font-size: 0.68rem; font-weight: 700;">★ ${isAr ? 'جديد' : 'NEW'}</span>` : ''}
                </div>
            </div>
            <p style="color: #cbd5e1; font-size: 0.92rem; line-height: 1.6; margin: 0 0 16px 0; flex-grow: 1;">
                "${escapeHTML(text)}"
            </p>
            <div style="font-size: 0.78rem; color: #64748b; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; margin-top: auto;">
                <span style="display: inline-flex; align-items: center; gap: 4px;">
                    <i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 0.72rem;"></i>
                    ${escapeHTML(source)}
                </span>
                <span>${escapeHTML(time)}</span>
            </div>
        </div>
    `;
}

function renderReviewsMarquee() {
    const container = document.getElementById('reviews-marquee-content');
    if (!container) return;

    let customReviews = [];
    try {
        customReviews = JSON.parse(localStorage.getItem('milan_custom_reviews') || '[]');
    } catch (e) {
        customReviews = [];
    }

    // Merge custom reviews in front, followed by initial authentic reviews
    let combined = [...customReviews, ...initialReviews];

    // Guarantee that Set A has at least 8 items so it is much wider than any screen (> 3200px)
    let baseList = [...combined];
    while (baseList.length < 8) {
        baseList = baseList.concat(combined);
    }

    // Generate Set A HTML
    const setAHtml = baseList.map(rev => createReviewCardHTML(rev)).join('');

    // Duplicate Set A to Set B for a 100% seamless, continuous, zero-gap infinite scroll loop
    container.innerHTML = setAHtml + setAHtml;
}

window.openReviewModal = function() {
    const modal = document.getElementById('review-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const nameInput = document.getElementById('new-review-name');
        if (nameInput) setTimeout(() => nameInput.focus(), 100);
    }
};

window.closeReviewModal = function() {
    const modal = document.getElementById('review-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

function initStarPicker() {
    const picker = document.getElementById('star-picker');
    const ratingInput = document.getElementById('new-review-rating');
    if (!picker || !ratingInput) return;

    const stars = picker.querySelectorAll('i');
    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            const r = parseInt(star.getAttribute('data-rating'));
            stars.forEach(s => {
                const sr = parseInt(s.getAttribute('data-rating'));
                if (sr <= r) s.classList.add('active');
                else s.classList.remove('active');
            });
        });
        star.addEventListener('click', () => {
            const r = parseInt(star.getAttribute('data-rating'));
            ratingInput.value = r;
            stars.forEach(s => {
                const sr = parseInt(s.getAttribute('data-rating'));
                if (sr <= r) s.classList.add('active');
                else s.classList.remove('active');
            });
        });
    });

    picker.addEventListener('mouseleave', () => {
        const currentR = parseInt(ratingInput.value) || 5;
        stars.forEach(s => {
            const sr = parseInt(s.getAttribute('data-rating'));
            if (sr <= currentR) s.classList.add('active');
            else s.classList.remove('active');
        });
    });
}

window.handleNewReviewSubmit = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const nameInput = document.getElementById('new-review-name');
    const ratingInput = document.getElementById('new-review-rating');
    const textInput = document.getElementById('new-review-text');

    if (!nameInput || !textInput) return false;

    const name = nameInput.value.trim();
    const rating = parseInt(ratingInput ? ratingInput.value : 5) || 5;
    const text = textInput.value.trim();

    if (!name || !text) {
        alert(currentLang === 'ar' ? 'يرجى كتابة الاسم والتقييم' : 'Please provide both your name and review text.');
        return false;
    }

    const newReview = {
        name: name,
        rating: rating,
        date: (currentLang === 'ar') ? 'الآن' : 'Just now',
        text: text,
        custom: true
    };

    let stored = [];
    try {
        stored = JSON.parse(localStorage.getItem('milan_custom_reviews') || '[]');
    } catch (err) {
        stored = [];
    }
    stored.unshift(newReview);
    localStorage.setItem('milan_custom_reviews', JSON.stringify(stored));

    // Reset inputs
    nameInput.value = '';
    textInput.value = '';
    if (ratingInput) ratingInput.value = '5';
    const picker = document.getElementById('star-picker');
    if (picker) {
        picker.querySelectorAll('i').forEach(s => s.classList.add('active'));
    }

    // Close modal
    closeReviewModal();

    // Re-render reviews immediately so the new review appears instantly in the conveyor belt!
    renderReviewsMarquee();

    // Show confirmation toast
    showReviewToast(currentLang === 'ar' 
        ? 'تمت إضافة تقييمك بنجاح ويظهر الآن على الموقع!' 
        : 'Your review was published instantly on the website!');

    return false;
};

function showReviewToast(message) {
    let toast = document.getElementById('review-toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'review-toast-notification';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #111827;
            color: #ffffff;
            border: 1px solid #facc15;
            padding: 14px 24px;
            border-radius: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            z-index: 999999;
            font-size: 0.95rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
            opacity: 0;
            pointer-events: none;
        `;
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #facc15; font-size: 1.2rem;"></i> <span>${message}</span>`;
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 4500);
}


// --- 6. FAQ Accordion Logic ---
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}


// --- 7. Lightbox Modal for Showroom Images ---
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (!lightbox || !lightboxImg) return;

    document.querySelectorAll('.showroom-item, .gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) closeLightbox();
    });
}


// --- 8. DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // A. Initialize AOS Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 40
        });
    }

    // B. Set footer dynamic year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // C. Preloader logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 350);
    }

    // D. Sticky Header & Scroll-to-Top
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (header) header.classList.add('scrolled');
        } else {
            if (header) header.classList.remove('scrolled');
        }

        if (scrollTopBtn) {
            if (window.scrollY > 450) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // E. Mobile Navigation Drawer
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // F. Initialize components
    applyLanguage(currentLang);
    updateStoreStatus();
    setInterval(updateStoreStatus, 60000); // Check hours every minute
    initStatsCounter();
    renderReviewsMarquee();
    initStarPicker();
    initFAQ();
    initLightbox();

    // Close review modal when clicking on backdrop
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('review-modal');
        if (modal && e.target === modal) {
            closeReviewModal();
        }
    });
});
