export type ServiceGroup = {
  title: string;
  items: { name: string; description: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Family Dental',
    items: [
      { name: 'Cleans', description: 'Routine scale & polish to keep plaque at bay.' },
      { name: 'Deep Cleans', description: 'Targeted periodontal cleaning for healthier gums.' },
      { name: 'Fillings', description: 'Tooth-coloured restorations that blend in naturally.' },
      { name: 'Extractions', description: 'Gentle removal, including wisdom teeth.' },
    ],
  },
  {
    title: 'Orthodontics',
    items: [
      { name: 'Braces', description: 'Traditional and ceramic options for every age.' },
      { name: 'Invisalign', description: 'Clear aligners for a discreet, comfortable straighten.' },
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    items: [
      { name: 'Cosmetic Veneers', description: 'Hand-crafted porcelain for a radiant smile.' },
      { name: 'Teeth Whitening', description: 'In-chair and take-home whitening systems.' },
    ],
  },
  {
    title: 'Major Dental',
    items: [
      { name: 'Root Canal Treatment', description: 'Painless endodontics that saves your natural tooth.' },
      { name: 'Crowns & Bridges', description: 'Restore strength and beauty with custom crowns.' },
      { name: 'Dentures', description: 'Comfortable, natural-looking full and partial dentures.' },
      { name: 'Dental Implants', description: 'Affordable implants that rebuild form and function.' },
    ],
  },
  {
    title: 'Other Services',
    items: [{ name: 'Non-surgical Wrinkle Treatment', description: 'Aesthetic treatments delivered by qualified clinicians.' }],
  },
];

export const feeOptions = [
  { name: 'Hospital Vouchers', category: 'Government Scheme', description: 'Accepted for eligible patients.' },
  { name: 'Child Dental Benefits', category: 'Government Scheme', description: 'CDBS bulk-billed for eligible kids.' },
  { name: 'WorkCover', category: 'Government Scheme', description: 'Workplace dental injury claims.' },
  { name: 'AfterPay', category: 'Payment Plans', description: 'Buy now, smile now, pay later.' },
  { name: 'Smile Dental Plan', category: 'Payment Plans', description: 'In-house membership for ongoing care.' },
  { name: 'Humm', category: 'Payment Plans', description: 'Flexible interest-free instalments.' },
  { name: 'SuperCare / Early Access to Super', category: 'Payment Plans', description: 'Access super for major dental work.' },
  { name: 'Zip Pay', category: 'Payment Plans', description: 'Spread the cost of your treatment.' },
];

export const highlights = [
  {
    title: 'Warranty on all treatments',
    body: 'Every treatment is backed by warranty. Ask our reception about coverage periods.',
    icon: 'shield',
  },
  {
    title: '$99 with OHT (Fridays) · $149 with Dentist',
    body: 'Includes OPG x-ray, clean, polish and fluoride.',
    icon: 'sparkles',
  },
  {
    title: 'Lifetime Discount',
    body: 'Loyal patients can unlock up to 30% off treatments.',
    icon: 'gift',
  },
  {
    title: 'Payment plans up to $50k',
    body: 'AfterPay, Zip Pay and SmileRight available.',
    icon: 'wallet',
  },
  {
    title: '10% Price Beat on all treatments',
    body: 'Bring a valid written plan and we will beat it by 10%.',
    icon: 'badge',
  },
  {
    title: 'Free consultations',
    body: 'Gap-free consults for veneers, Invisalign, implants and braces.',
    icon: 'heart',
  },
];

export const faqs = [
  {
    q: 'How often should I visit the dentist?',
    a: 'Every six months for most adults and children. Patients with gum disease may need three-monthly visits until things stabilise. Regular check-ups catch decay and gum recession early — when treatment is simplest and most affordable.',
  },
  {
    q: 'What can I do for sensitive teeth?',
    a: 'Try a sensitive-toothpaste like Sensodyne, apply a small amount to the area before bed, avoid acidic food and drink, and wait an hour after eating before brushing. If grinding is a factor, a night guard helps. Persistent sensitivity should be assessed by our team.',
  },
  {
    q: 'Should I rinse after brushing?',
    a: 'No — spitting is enough. Rinsing washes away the protective fluoride layer left by your toothpaste. The same applies to mouthwash: use it at a different time to brushing for the best effect.',
  },
  {
    q: 'How often do I need X-rays?',
    a: 'A full set is taken early in your care with us, then bitewings annually for most adults. We offer in-house X-rays during your first consultation so everything is convenient and in one place.',
  },
  {
    q: 'How do I prevent bad breath?',
    a: 'Six-monthly professional cleans remove the plaque and tartar that harbour sulphur-producing bacteria. Brush and floss daily, and use a tongue scraper — the back of the tongue is a common source of odour.',
  },
  {
    q: 'Why are my teeth yellowing?',
    a: 'Coffee, tea, red wine, tobacco and some antibiotics all contribute. Inadequate plaque removal makes it worse. Book a consult to explore professional whitening tailored to your enamel.',
  },
  {
    q: 'When should my child first see a dentist?',
    a: 'When the first tooth appears, and no later than age one. Early visits build positive habits. We often let children sit with a parent or sibling first so they feel comfortable before any treatment.',
  },
  {
    q: 'Manual or electric toothbrush?',
    a: 'If your manual technique is effective, stay with it. If you miss plaque or struggle with technique, an electric brush can help. Some patients use electric in the morning and manual at night to keep their dexterity sharp.',
  },
  {
    q: 'My gums bleed — is that serious?',
    a: 'Bleeding and swollen gums are early signs of gum disease, a leading cause of tooth loss. It can progress without pain. Early-stage disease is often reversible with scaling, root planing and improved home care — book an assessment promptly.',
  },
  {
    q: 'What if I need to cancel an appointment?',
    a: 'Give us at least 24 hours notice so we can offer the slot to another patient. Late cancellations without notice may incur a $50 fee.',
  },
];

export const clinics = [
  'Toongabbie',
  'Winston Hills',
  'Baulkham Hills',
  'Pendle Hill',
  'Wentworthville',
  'Seven Hills',
];

export const timeSlots = [
  '9:00 AM – 10:00 AM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
];
