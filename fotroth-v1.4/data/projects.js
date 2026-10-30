/**
 * FOTROTH V1.4 — Complete Projects Archive
 */
window.FotrothData = window.FotrothData || {};

function _p(id, cat, cat_fa, title, title_fa, client, client_fa, desc, desc_fa, aspect) {
  let equipmentEn = 'Canon 1Dx Mark III • Profoto D1 Air';
  let equipmentFa = 'کانن 1Dx Mark III • پروفوتو D1 Air';

  if (cat === 'architecture') {
    equipmentEn = 'Canon 5Ds • Wide / 24-70mm / Tilt-Shift • Profoto D1 Air';
    equipmentFa = 'کانن 5Ds • واید / ۲۴-۷۰ / تیلت-شیفت • پروفوتو D1 Air';
  } else if (cat === 'cosmetics' || cat === 'products') {
    equipmentEn = 'Canon 1Dx Mark III • Macro 100mm • Profoto D1 Air';
    equipmentFa = 'کانن 1Dx Mark III • ماکرو ۱۰۰mm • پروفوتو D1 Air';
  } else if (cat === 'industrial') {
    equipmentEn = 'Canon 5Ds • Wide Angle • Profoto D1 Air';
    equipmentFa = 'کانن 5Ds • لنز واید • پروفوتو D1 Air';
  } else if (cat === 'foods') {
    equipmentEn = 'Canon 1Dx Mark III • 24-70mm • Profoto D1 Air';
    equipmentFa = 'کانن 1Dx Mark III • ۲۴-۷۰ • پروفوتو D1 Air';
  } else if (cat === 'portrait') {
    equipmentEn = 'Canon 5D Mark IV • Profoto D1 Air';
    equipmentFa = 'کانن 5D Mark IV • پروفوتو D1 Air';
  }

  const categoryDisplay = cat === 'cosmetics' ? 'Cosmetics' : (cat === 'foods' ? 'Foods' : (cat === 'products' ? 'Products' : (cat === 'industrial' ? 'Industrial' : (cat === 'architecture' ? 'Architecture' : (cat === 'portrait' ? 'Portrait' : (cat === 'sheet' ? 'Sheet' : cat))))));

  return {
    id: 'p-' + id,
    category_id: cat,
    category: categoryDisplay,
    category_fa: cat_fa,
    title: title, title_fa: title_fa,
    client: client, client_fa: client_fa,
    year: '2024',
    cover: './assets/images/projects/' + id + '/cover.jpg',
    gallery: [
      './assets/images/projects/' + id + '/gallery/01.jpg',
      './assets/images/projects/' + id + '/gallery/02.jpg',
      './assets/images/projects/' + id + '/gallery/03.jpg',
      './assets/images/projects/' + id + '/gallery/04.jpg'
    ],
    desc: desc, desc_fa: desc_fa,
    specs: equipmentEn, specs_fa: equipmentFa,
    equipment: equipmentEn, equipment_fa: equipmentFa,
    location: 'Tehran, Iran', location_fa: 'تهران، ایران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: aspect, featured: false, published: true
  };
}

window.FotrothData.projects = [
  // ═══ 4 FEATURED ═══
  {
    id: 'p-vmoda-01', category_id: 'products', category: 'Products', category_fa: 'محصولات',
    title: 'V Mouda — Product Campaign', title_fa: 'وی مودا — کمپین محصول',
    client: 'V Mouda', client_fa: 'وی مودا', year: '2024',
    cover: './assets/images/projects/vmoda/cover.jpg',
    gallery: ['./assets/images/projects/vmoda/gallery/01.jpg','./assets/images/projects/vmoda/gallery/02.jpg','./assets/images/projects/vmoda/gallery/03.jpg'],
    desc: 'A minimalist product campaign exploring form, texture, and material honesty.',
    desc_fa: 'کمپین مینیمال محصول با کاوش در فرم، بافت و صداقت متریال.',
    specs: 'Canon 1Dx Mark III • Macro 100mm • Profoto D1 Air',
    specs_fa: 'کانن 1Dx Mark III • ماکرو ۱۰۰ میلی‌متر • پروفوتو D1 Air',
    equipment: 'Canon 1Dx Mark III • Macro 100mm • Profoto D1 Air',
    equipment_fa: 'کانن 1Dx Mark III • ماکرو ۱۰۰ میلی‌متر • پروفوتو D1 Air',
    location: 'Tehran, Iran', location_fa: 'تهران، ایران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: 'tall', featured: true, published: true
  },
  {
    id: 'p-orachi-01', category_id: 'cosmetics', category: 'Cosmetics', category_fa: 'لوازم آرایشی',
    title: 'Orachi — Color Range Campaign', title_fa: 'اوراچی — کمپین رنگ‌بندی',
    client: 'Orachi Cosmetics', client_fa: 'لوازم آرایشی اوراچی', year: '2024',
    cover: './assets/images/projects/orachi/cover.jpg',
    gallery: ['./assets/images/projects/orachi/gallery/01.jpg','./assets/images/projects/orachi/gallery/02.jpg','./assets/images/projects/orachi/gallery/03.jpg','./assets/images/projects/orachi/gallery/04.jpg','./assets/images/projects/orachi/gallery/05.jpg'],
    desc: 'A comprehensive cosmetics campaign exploring pigment intensity and product geometry.',
    desc_fa: 'کمپین جامع لوازم آرایشی با کاوش در شدت رنگدانه و هندسه محصول.',
    specs: 'Canon 1Dx Mark III • Macro 100mm • Profoto D1 Air',
    specs_fa: 'کانن 1Dx Mark III • ماکرو ۱۰۰ میلی‌متر • پروفوتو D1 Air',
    equipment: 'Canon 1Dx Mark III • Macro 100mm • Profoto D1 Air',
    equipment_fa: 'کانن 1Dx Mark III • ماکرو ۱۰۰ میلی‌متر • پروفوتو D1 Air',
    location: 'Tehran, Iran', location_fa: 'تهران، ایران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: 'square', featured: true, published: true
  },
  {
    id: 'p-chopchop-01', category_id: 'foods', category: 'Foods', category_fa: 'غذا و آشپزی',
    title: 'Chop Chop — Restaurant Identity', title_fa: 'چاپ چاپ — هویت رستوران',
    client: 'Chop Chop Restaurant', client_fa: 'رستوران چاپ چاپ', year: '2024',
    cover: './assets/images/projects/chopchop/cover.jpg',
    gallery: ['./assets/images/projects/chopchop/gallery/01.jpg','./assets/images/projects/chopchop/gallery/02.jpg','./assets/images/projects/chopchop/gallery/03.jpg','./assets/images/projects/chopchop/gallery/04.jpg','./assets/images/projects/chopchop/gallery/05.jpg','./assets/images/projects/chopchop/gallery/06.jpg','./assets/images/projects/chopchop/gallery/07.jpg','./assets/images/projects/chopchop/gallery/08.jpg'],
    desc: 'Full visual identity campaign spanning appetizers, mains, sushi, salads, soups, drinks, and desserts.',
    desc_fa: 'کمپین هویت بصری کامل شامل پیش‌غذا، غذای اصلی، سوشی، سالاد، سوپ، نوشیدنی و دسر.',
    specs: 'Canon 1Dx Mark III • Profoto D1 Air',
    specs_fa: 'کانن 1Dx Mark III • پروفوتو D1 Air',
    equipment: 'Canon 1Dx Mark III • Profoto D1 Air',
    equipment_fa: 'کانن 1Dx Mark III • پروفوتو D1 Air',
    location: 'Chop Chop Restaurant, Tehran', location_fa: 'رستوران چاپ چاپ، تهران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: 'wide', featured: true, published: true
  },
  {
    id: 'p-artin-01', category_id: 'products', category: 'Products', category_fa: 'محصولات',
    title: 'Artin — Faucet Collection', title_fa: 'آرتین — مجموعه شیرآلات',
    client: 'Artin Faucets', client_fa: 'شیرآلات آرتین', year: '2024',
    cover: './assets/images/projects/artin/cover.jpg',
    gallery: ['./assets/images/projects/artin/gallery/01.jpg','./assets/images/projects/artin/gallery/02.jpg','./assets/images/projects/artin/gallery/03.jpg','./assets/images/projects/artin/gallery/04.jpg'],
    desc: 'Precision commercial photography of polished metal faucets with reflection control.',
    desc_fa: 'عکاسی تجاری دقیق از شیرآلات فلزی پولیش‌شده با کنترل انعکاس.',
    specs: 'Canon 5Ds • 24-70mm • Profoto D1 Air',
    specs_fa: 'کانن 5Ds • ۲۴-۷۰ میلی‌متر • پروفوتو D1 Air',
    equipment: 'Canon 5Ds • 24-70mm • Profoto D1 Air',
    equipment_fa: 'کانن 5Ds • ۲۴-۷۰ میلی‌متر • پروفوتو D1 Air',
    location: 'Tehran, Iran', location_fa: 'تهران، ایران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: 'tall', featured: true, published: true
  },

  // ═══ COSMETICS (14) ═══
  _p('alter', 'cosmetics', 'لوازم آرایشی', 'Alter — Color Cosmetics Collection', 'آلتر — مجموعه رنگ آرایشی', 'Alter Cosmetics', 'لوازم آرایشی آلتر', 'A contemporary color cosmetics campaign exploring vibrant pigment and modern packaging.', 'کمپین معاصر رنگ آرایشی با کاوش در رنگدانه‌های پرنشاط و بسته‌بندی مدرن.', 'square'),
  _p('chilik', 'cosmetics', 'لوازم آرایشی', 'Chilik — Argan Beauty Series', 'چیلیک — مجموعه زیبایی آرگان', 'Chilik Beauty', 'چیلیک بیوتی', 'Natural beauty campaign featuring argan-oil skincare and eyebrow cosmetics.', 'کمپین زیبایی طبیعی با محصولات مراقبت پوست آرگان و آرایش ابرو.', 'tall'),
  _p('divesta', 'cosmetics', 'لوازم آرایشی', 'Divesta — Full Cosmetics Range', 'دیوستا — مجموعه کامل آرایشی', 'Divesta', 'دیوستا', 'Comprehensive cosmetics range including foundations, concealers, mascara, and lipsticks.', 'مجموعه جامع لوازم آرایشی شامل کرم‌پودر، کانسیلر، ریمل و رژ لب.', 'square'),
  _p('divio', 'cosmetics', 'لوازم آرایشی', 'Divio — Elegant Cosmetics Series', 'دیویو — مجموعه لوکس آرایشی', 'Divio Cosmetics', 'لوازم آرایشی دیویو', 'Precision macro photography of liquid foundations, mascara, and lip products.', 'عکاسی ماکرو دقیق از کرم‌پودر مایع، ریمل و محصولات لب.', 'tall'),
  _p('glowic', 'cosmetics', 'لوازم آرایشی', 'Glowic — Lipstick & Palette Series', 'گلویک — مجموعه رژ و پالت', 'Glowic', 'گلویک', 'Vibrant lipstick and palette campaign featuring liquid splash compositions.', 'کمپین پویا رژ لب و پالت با ترکیب‌بندی‌های اسپلش مایع.', 'wide'),
  _p('golden-shop', 'cosmetics', 'لوازم آرایشی', 'Golden Shop — Catalog Series', 'گلدن شاپ — مجموعه کاتالوگ', 'Golden Shop', 'گلدن شاپ', 'Catalog-style photography of cosmetics and lifestyle products.', 'عکاسی به سبک کاتالوگ از لوازم آرایشی و محصولات سبک زندگی.', 'square'),
  _p('great-sun', 'cosmetics', 'لوازم آرایشی', 'Great Sun — Luxury Beauty Range', 'گریت سان — مجموعه زیبایی لوکس', 'Great Sun', 'گریت سان', 'Luxury cosmetics collection featuring premium skincare and makeup lines.', 'مجموعه لوکس لوازم آرایشی با محصولات مراقبت پوست و آرایش فاخر.', 'tall'),
  _p('inovox', 'cosmetics', 'لوازم آرایشی', 'Inovox — Bold Color Palette', 'اینووکس — پالت رنگ جسورانه', 'Inovox', 'اینووکس', 'Bold color cosmetics with artistic compositions and floral elements.', 'لوازم آرایشی رنگی جسورانه با ترکیب‌بندی‌های هنری و عناصر گل.', 'wide'),
  _p('letrasset', 'cosmetics', 'لوازم آرایشی', 'Letrasset — Seasonal Beauty Campaigns', 'لتراست — کمپین‌های فصلی زیبایی', 'Letrasset', 'لتراست', 'Year-long seasonal cosmetics campaigns spanning winter, spring, and Yalda festivals.', 'کمپین‌های زیبایی فصلی در طول سال شامل زمستان، بهار و جشن یلدا.', 'tall'),
  _p('lido', 'cosmetics', 'لوازم آرایشی', 'Lido — Minimalist Beauty Essentials', 'لیدو — ضروریات زیبایی مینیمال', 'Lido', 'لیدو', 'Minimalist still life series featuring eyeliner, lipstick, and mascara.', 'مجموعه طبیعت بی‌جان مینیمال شامل ریمل، رژ لب و خط چشم.', 'square'),
  _p('mantel', 'cosmetics', 'لوازم آرایشی', 'Mantel — Eyes & Lip Collection', 'مانتل — مجموعه چشم و لب', 'Mantel', 'مانتل', 'Eyes and lips-focused cosmetics campaign featuring full beauty range.', 'کمپین آرایشی متمرکز بر چشم و لب با مجموعه کامل زیبایی.', 'tall'),
  _p('mirador', 'cosmetics', 'لوازم آرایشی', 'Mirador — Editorial Beauty Studies', 'میرادور — مطالعات زیبایی ادیتوریال', 'Mirador', 'میرادور', 'Editorial beauty studies with bold composition and high-fashion styling.', 'مطالعات زیبایی ادیتوریال با ترکیب‌بندی جسورانه و سبک فشن.', 'wide'),
  _p('ocuz', 'cosmetics', 'لوازم آرایشی', 'Ocuz — Liquid Lipstick Compositions', 'اوکوز — ترکیب‌بندی رژ مایع', 'Ocuz', 'اوکوز', 'Liquid lipstick photomontage and composition series with rich pigment.', 'مجموعه فوتومونتاژ و ترکیب‌بندی رژ لب مایع با رنگدانه‌های غنی.', 'square'),
  _p('prominent', 'cosmetics', 'لوازم آرایشی', 'Prominent — Brand & Retail Campaign', 'پرومیننت — کمپین برند و فروشگاهی', 'Prominent', 'پرومیننت', 'Complete brand campaign including retail stands, website visuals, and product shots.', 'کمپین کامل برند شامل استندهای فروشگاهی، تصاویر وب‌سایت و عکس‌های محصول.', 'tall'),

  // ═══ FOODS (7) ═══
  _p('ahoo', 'foods', 'غذا و آشپزی', 'Ahoo — Signature Culinary Series', 'آهو — مجموعه آشپزی امضایی', 'Ahoo Restaurant', 'رستوران آهو', 'Signature culinary campaign featuring traditional Iranian dishes with modern plating.', 'کمپین آشپزی امضایی با غذاهای سنتی ایرانی و چیدمان مدرن.', 'tall'),
  _p('balcafe', 'foods', 'غذا و آشپزی', 'Balcafe — Cafe & Bakery Series', 'بال‌کافه — مجموعه کافه و قنادی', 'Balcafe', 'بال‌کافه', 'Modern cafe and bakery campaign featuring artisan pastries and specialty coffee.', 'کمپین کافه و قنادی مدرن با شیرینی‌های دست‌ساز و قهوه تخصصی.', 'square'),
  _p('bunch', 'foods', 'غذا و آشپزی', 'Bunch — Contemporary Dining', 'بانچ — پذیرایی معاصر', 'Bunch Restaurant', 'رستوران بانچ', 'Contemporary dining campaign exploring modern fusion cuisine and atmosphere.', 'کمپین پذیرایی معاصر با کاوش در غذاهای فیوژن مدرن و اتمسفر.', 'wide'),
  _p('dialma', 'foods', 'غذا و آشپزی', 'Dialma — Artisan Cafe Experience', 'دیالما — تجربه کافه دست‌ساز', 'Dialma', 'دیالما', 'Artisan cafe experience featuring specialty coffee and handcrafted desserts.', 'تجربه کافه دست‌ساز با قهوه تخصصی و دسرهای دست‌ساز.', 'tall'),
  _p('manoosh', 'foods', 'غذا و آشپزی', 'Manoosh — Traditional Persian Cuisine', 'منوش — آشپزی سنتی ایرانی', 'Manoosh Restaurant', 'رستوران منوش', 'Traditional Persian cuisine campaign with warm atmospheric dining scenes.', 'کمپین آشپزی سنتی ایرانی با صحنه‌های گرم و اتمسفریک صرف غذا.', 'tall'),
  _p('paris', 'foods', 'غذا و آشپزی', 'Paris — French Bistro Experience', 'پاریس — تجربه بیسترو فرانسوی', 'Paris Bistro', 'بیسترو پاریس', 'French bistro cuisine featuring classic dishes with elegant presentation.', 'آشپزی بیسترو فرانسوی با غذاهای کلاسیک و ارائه ظریف.', 'wide'),
  _p('pelak', 'foods', 'غذا و آشپزی', 'Pelak — Modern Iranian Kitchen', 'پلک — آشپزخانه مدرن ایرانی', 'Pelak Restaurant', 'رستوران پلک', 'Modern Iranian kitchen with a contemporary spin on traditional Persian flavors.', 'آشپزخانه مدرن ایرانی با نگاهی معاصر به طعم‌های سنتی پارسی.', 'wide'),

  // ═══ PRODUCTS (8) ═══
  _p('active', 'products', 'محصولات', 'Active — Sports & Lifestyle Products', 'اکتیو — محصولات ورزشی و سبک زندگی', 'Active Brand', 'برند اکتیو', 'Sports and lifestyle product campaign exploring dynamic composition and material.', 'کمپین محصولات ورزشی و سبک زندگی با کاوش در ترکیب‌بندی دینامیک و متریال.', 'tall'),
  _p('carpet', 'products', 'محصولات', 'Carpet — Heritage Weave Collection', 'فرش — مجموعه بافت میراثی', 'Heritage Carpets', 'فرش میراثی', 'Traditional Persian carpet campaign featuring intricate patterns and rich colors.', 'کمپین فرش سنتی ایرانی با الگوهای پیچیده و رنگ‌های غنی.', 'wide'),
  _p('glory', 'products', 'محصولات', 'Glory — Industrial Product Range', 'گلوری — مجموعه محصولات صنعتی', 'Glory Industrial', 'گلوری صنعتی', 'Industrial product photography with photomontage compositions and dynamic angles.', 'عکاسی محصولات صنعتی با ترکیب‌بندی فوتومونتاژ و زوایای دینامیک.', 'square'),
  _p('gold-silver', 'products', 'محصولات', 'Gold & Silver — Jewelry Collection', 'طلا و نقره — مجموعه جواهرات', 'Gold & Silver Jewelry', 'جواهرات طلا و نقره', 'Luxury jewelry campaign featuring bracelets, necklaces, and precious accessories.', 'کمپین جواهرات لوکس شامل دستبند، گردنبند و اکسسوری‌های گرانبها.', 'square'),
  _p('rialo', 'products', 'محصولات', 'Rialo — Contemporary Objects', 'ریالو — اشیاء معاصر', 'Rialo', 'ریالو', 'Modern product design campaign with clean lines and minimalist aesthetics.', 'کمپین طراحی محصول مدرن با خطوط تمیز و زیبایی‌شناسی مینیمال.', 'tall'),
  _p('rosary', 'products', 'محصولات', 'Rosary — Sacred Collection', 'تسبیح — مجموعه مقدس', 'Rosary Collection', 'مجموعه تسبیح', 'Sacred rosary collection photographed with dramatic light and color accents.', 'مجموعه تسبیح مقدس با نورپردازی دراماتیک و لهجه‌های رنگی.', 'square'),
  _p('shokoufeh', 'products', 'محصولات', 'Shokoufeh — Artisan Product Series', 'شکوفه — مجموعه محصولات دست‌ساز', 'Shokoufeh', 'شکوفه', 'Artisan product series with warm atmospheric lighting and tactile quality.', 'مجموعه محصولات دست‌ساز با نورپردازی گرم و کیفیت لمسی.', 'tall'),
  _p('shokrin', 'products', 'محصولات', 'Shokrin — Timepiece Collection', 'شکرین — مجموعه ساعت', 'Shokrin', 'شکرین', 'Elegant timepiece collection featuring detailed watch photography.', 'مجموعه ساعت‌های ظریف با عکاسی دقیق از جزئیات ساعت.', 'square'),

  // ═══ INDUSTRIAL (11) ═══
  _p('industrial', 'industrial', 'صنعتی', 'Industrial — Petrochemical Complexes', 'صنعتی — مجتمع‌های پتروشیمی', 'Petrochemical Industry', 'صنعت پتروشیمی', 'Monumental industrial photography of Iranian petrochemical complexes.', 'عکاسی صنعتی عظیم از مجتمع‌های پتروشیمی ایران.', 'wide'),
  _p('uromiyeh', 'industrial', 'صنعتی', 'Uromiyeh Petrochemical Complex', 'مجتمع پتروشیمی ارومیه', 'Uromiyeh Petrochemical', 'پتروشیمی ارومیه', 'Aerial and ground documentation of the Uromiyeh petrochemical facility.', 'مستندسازی هوایی و زمینی مجتمع پتروشیمی ارومیه.', 'wide'),
  _p('dsc-3310', 'industrial', 'صنعتی', 'Industrial Detail Study', 'مطالعه جزئیات صنعتی', 'Petrochemical Industry', 'صنعت پتروشیمی', 'Close-up industrial detail capturing pipework, valves, and structural steel.', 'جزئیات صنعتی نزدیک شامل لوله‌کشی، شیرآلات و فولاد سازه.', 'tall'),
  _p('kavian', 'industrial', 'صنعتی', 'Kavian Petrochemical Complex', 'مجتمع پتروشیمی کاویان', 'Kavian Petrochemical', 'پتروشیمی کاویان', 'Full-scale documentation of the Kavian petrochemical complex operations.', 'مستندسازی کامل عملیات مجتمع پتروشیمی کاویان.', 'wide'),
  _p('bandar-imam', 'industrial', 'صنعتی', 'Bandar Imam Petrochemical Complex', 'مجتمع پتروشیمی بندر امام', 'Bandar Imam', 'بندر امام', 'Panoramic view of the Bandar Imam petrochemical operations in Mahshahr.', 'نمای پانوراما از عملیات پتروشیمی بندر امام در ماهشهر.', 'wide'),
  _p('cf002876', 'industrial', 'صنعتی', 'Petrochemical Infrastructure', 'زیرساخت پتروشیمی', 'Petrochemical Industry', 'صنعت پتروشیمی', 'Infrastructure documentation capturing scale and precision of heavy industrial systems.', 'مستندسازی زیرساخت با ثبت مقیاس و دقت سیستم‌های صنعتی سنگین.', 'wide'),
  _p('untitled-pan', 'industrial', 'صنعتی', 'Industrial Panorama', 'پانوراما صنعتی', 'Petrochemical Industry', 'صنعت پتروشیمی', 'Sweeping panoramic capture of a petrochemical complex at golden hour.', 'ثبت پانورامیک از مجتمع پتروشیمی در ساعت طلایی.', 'wide'),
  _p('marjan', 'industrial', 'صنعتی', 'Marjan Petrochemical Complex', 'مجتمع پتروشیمی مرجان', 'Marjan Petrochemical', 'پتروشیمی مرجان', 'Documentation of the Marjan petrochemical complex.', 'مستندسازی مجتمع پتروشیمی مرجان.', 'wide'),
  _p('khorasan-2', 'industrial', 'صنعتی', 'Khorasan Petrochemical — Detail', 'پتروشیمی خراسان — جزئیات', 'Khorasan Petrochemical', 'پتروشیمی خراسان', 'Detail study of the Khorasan petrochemical facility.', 'مطالعه جزئیات تاسیسات پتروشیمی خراسان.', 'tall'),
  _p('khorasan-1', 'industrial', 'صنعتی', 'Khorasan Petrochemical Complex', 'مجتمع پتروشیمی خراسان', 'Khorasan Petrochemical', 'پتروشیمی خراسان', 'Full complex documentation of the Khorasan petrochemical operations.', 'مستندسازی کامل عملیات پتروشیمی خراسان.', 'wide'),
  _p('kavian-asa', 'industrial', 'صنعتی', 'Kavian Asaluyeh', 'کاویان عسلویه', 'Kavian Asaluyeh', 'کاویان عسلویه', 'Kavian petrochemical complex in Asaluyeh — industrial scale at its finest.', 'مجتمع پتروشیمی کاویان در عسلویه — مقیاس صنعتی در بهترین حالت.', 'wide'),

  // ═══ ARCHITECTURE (4) ═══
  _p('arch-1', 'architecture', 'معماری', 'Architecture — Spatial Studies I', 'معماری — مطالعات فضایی ۱', 'Architectural Series', 'مجموعه معماری', 'First chapter of architectural studies exploring light, volume, and modern spatial form.', 'فصل اول مطالعات معماری با کاوش در نور، حجم و فرم فضایی مدرن.', 'tall'),
  _p('arch-2', 'architecture', 'معماری', 'Architecture — Spatial Studies II', 'معماری — مطالعات فضایی ۲', 'Architectural Series', 'مجموعه معماری', 'Second chapter — intimate interior architecture and light through structure.', 'فصل دوم — معماری داخلی صمیمانه و نور از میان سازه.', 'tall'),
  _p('arch-3', 'architecture', 'معماری', 'Architecture — Spatial Studies III', 'معماری — مطالعات فضایی ۳', 'Architectural Series', 'مجموعه معماری', 'Final chapter — concrete geometry and the poetics of modern brutalism.', 'فصل پایانی — هندسه بتنی و شاعرانگی بروتالیسم مدرن.', 'tall'),
  {
    id: 'p-chopchop-arch', category_id: 'architecture', category: 'Architecture', category_fa: 'معماری',
    title: 'Chop Chop — Architectural Composition', title_fa: 'چاپ چاپ — ترکیب‌بندی معماری',
    client: 'Chop Chop Architecture', client_fa: 'معماری چاپ چاپ', year: '2024',
    cover: './assets/images/projects/chopchop-arch/cover.jpg',
    gallery: [
      './assets/images/projects/chopchop-arch/gallery/01.jpg',
      './assets/images/projects/chopchop-arch/gallery/02.jpg',
      './assets/images/projects/chopchop-arch/gallery/03.jpg',
      './assets/images/projects/chopchop-arch/gallery/04.jpg'
    ],
    desc: 'Architectural interior composition of the Chop Chop restaurant environment.',
    desc_fa: 'ترکیب‌بندی معماری داخلی محیط رستوران چاپ چاپ.',
    specs: 'Canon 5Ds • 24-70mm • Tilt-Shift • Profoto D1 Air',
    specs_fa: 'کانن 5Ds • ۲۴-۷۰ میلی‌متر • تیلت-شیفت • پروفوتو D1 Air',
    equipment: 'Canon 5Ds • 24-70mm • Tilt-Shift • Profoto D1 Air',
    equipment_fa: 'کانن 5Ds • ۲۴-۷۰ میلی‌متر • تیلت-شیفت • پروفوتو D1 Air',
    location: 'Tehran, Iran', location_fa: 'تهران، ایران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: 'wide', featured: false, published: true
  },

  // ═══ PORTRAIT (1) ═══
  {
    id: 'p-portrait', category_id: 'portrait', category: 'Portrait', category_fa: 'پرتره',
    title: 'Portrait — Editorial Character Studies', title_fa: 'پرتره — مطالعات شخصیت ادیتوریال',
    client: 'Editorial Portraiture', client_fa: 'پرتره ادیتوریال', year: '2024',
    cover: './assets/images/projects/portrait/cover.jpg',
    gallery: [
      './assets/images/projects/portrait/gallery/01.jpg',
      './assets/images/projects/portrait/gallery/02.jpg',
      './assets/images/projects/portrait/gallery/03.jpg',
      './assets/images/projects/portrait/gallery/04.jpg',
      './assets/images/projects/portrait/gallery/05.jpg'
    ],
    desc: 'Intimate portrait series exploring human character through dramatic lighting.',
    desc_fa: 'مجموعه پرتره صمیمانه با کاوش در شخصیت انسانی از طریق نورپردازی دراماتیک.',
    specs: 'Canon 1Dx Mark III • Profoto D1 Air',
    specs_fa: 'کانن 1Dx Mark III • پروفوتو D1 Air',
    equipment: 'Canon 1Dx Mark III • Profoto D1 Air',
    equipment_fa: 'کانن 1Dx Mark III • پروفوتو D1 Air',
    location: 'Tehran, Iran', location_fa: 'تهران، ایران',
    lighting: 'Profoto D1 Air studio strobes with precision diffusion.',
    lighting_fa: 'استروب استودیویی Profoto D1 Air با دیفیوژن دقیق.',
    aspect_ratio: 'tall', featured: false, published: true
  },

  // ═══ SHEET (8) ═══
  _p('sheet-01', 'sheet', 'شیت', 'Portfolio Sheet — Chop Chop', 'شیت پرتفولیو — چاپ چاپ', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the Chop Chop culinary identity.', 'شیت منتخب پرتفولیو نمایش‌دهنده هویت آشپزی چاپ چاپ.', 'wide'),
  _p('sheet-02', 'sheet', 'شیت', 'Portfolio Sheet — Golden Shop & Chilik', 'شیت پرتفولیو — گلدن شاپ و چیلیک', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing Golden Shop and Chilik cosmetics campaigns.', 'شیت منتخب پرتفولیو نمایش‌دهنده کمپین‌های آرایشی گلدن شاپ و چیلیک.', 'wide'),
  _p('sheet-03', 'sheet', 'شیت', 'Portfolio Sheet — Letrasset', 'شیت پرتفولیو — لتراست', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the Letrasset cosmetics series.', 'شیت منتخب پرتفولیو نمایش‌دهنده مجموعه آرایشی لتراست.', 'wide'),
  _p('sheet-04', 'sheet', 'شیت', 'Portfolio Sheet — Mantle', 'شیت پرتفولیو — مانتل', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the Mantle beauty series.', 'شیت منتخب پرتفولیو نمایش‌دهنده مجموعه زیبایی مانتل.', 'wide'),
  _p('sheet-05', 'sheet', 'شیت', 'Portfolio Sheet — OHA', 'شیت پرتفولیو — OHA', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the OHA brand visual direction.', 'شیت منتخب پرتفولیو نمایش‌دهنده هدایت بصری برند OHA.', 'wide'),
  _p('sheet-06', 'sheet', 'شیت', 'Portfolio Sheet — Orachi', 'شیت پرتفولیو — اوراچی', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the Orachi cosmetics campaign.', 'شیت منتخب پرتفولیو نمایش‌دهنده کمپین آرایشی اوراچی.', 'wide'),
  _p('sheet-07', 'sheet', 'شیت', 'Portfolio Sheet — Pelak', 'شیت پرتفولیو — پلک', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the Pelak culinary identity.', 'شیت منتخب پرتفولیو نمایش‌دهنده هویت آشپزی پلک.', 'wide'),
  _p('sheet-08', 'sheet', 'شیت', 'Portfolio Sheet — Prominent', 'شیت منتخب پرتفولیو — پرومیننت', 'FOTROTH Archive', 'آرشیو فوتروث', 'Curated portfolio sheet showcasing the Prominent brand identity.', 'شیت منتخب پرتفولیو نمایش‌دهنده هویت برند پرومیننت.', 'wide')
];