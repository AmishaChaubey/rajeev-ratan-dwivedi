import { useState, useEffect } from "react";
import {
  Trophy, Gem, Telescope, HandHeart, Globe, Star,
  Phone, MessageCircle, MapPin, Mail, BookOpen, GraduationCap,
  ScrollText, Users, Sparkles, HeartHandshake, ChevronDown
} from "lucide-react";

/* ─────────────────────────── CONTENT ─────────────────────────── */
const content = {
  english: {
    nav: { home: "Home", about: "About", services: "Services", contact: "Contact", book: "Book Pooja" },
    hero: {
      name: "Acharya Shri Rajeevanand Ji Maharaj",
      subtitle: "Vedic Pooja & Astrology Services",
      desc: "Experienced Pandit for Havan, Vivah, Grih Pravesh & Kundli Consultation.",
      call: "Call Now", whatsapp: "WhatsApp",
      badge1: "20+ Years", badge2: "5000+ Poojas", badge3: "Pan India",
    },
about: {
  title: "About Acharya Ji",
  intro: "Acharya Shri Rajeevanand Ji Maharaj is a renowned spiritual preacher and Vedic scholar, widely respected for his Shri Ram Katha discourses and deep knowledge of Samast Karm Kand (all Vedic rituals). He is a highly experienced Kundli Visheshagya (astrology expert) with strong command over traditional Vedic scriptures. He holds a Master’s degree (M.A.) in Sanskrit, reflecting his strong academic and spiritual foundation.",
  bullets: [
    { icon: "ScrollText", text: "Specialist in Shri Ram Katha & Complete Vedic Karm Kand Rituals" },
    { icon: "Telescope", text: "Expert Kundli Visheshagya — Marriage, Career, Health & Life Guidance" },
    { icon: "Sparkles", text: "M.A. in Sanskrit with deep knowledge of Vedic scriptures" },
    { icon: "Globe", text: "Dedicated to spreading Sanatan Dharma & preserving Vedic traditions" },
  ],
},
    services: {
      title: "Our Services",
      items: [
        { title: "Havan & Grih Shanti", desc: "Vedic mantras and grih shanti rituals to bring peace and harmony to your home." },
        { title: "Vivah Sanskar", desc: "Traditional wedding ceremonies conducted with authenticity and divine blessings." },
        { title: "Grih Pravesh Pooja", desc: "Housewarming pooja to bless your new home with prosperity and positivity." },
        { title: "Satyanarayan Katha", desc: "Sacred Satyanarayan Katha to remove obstacles and invite prosperity." },
        { title: "Namkaran Sanskar", desc: "Sacred naming ceremony performed with Vedic mantras and divine blessings." },
      ],
      astroCard: {
        title: "Kundli Vishleshan & Astrology",
        subtitle: "Love & Relationship Problem Solution",
        kundliItems: ["Love marriage issues", "Breakup problems", "Family approval issues", "Delay in marriage"],
        loveItems: ["Love marriage issues", "Family approval issues", "Delay in marriage", "Compatibility check"],
      },
    },
    why: {
      title: "Why Choose Us?",
      items: [
        { icon: "Trophy", title: "20+ Years Experience", desc: "Decades of authentic Vedic practice and ritual expertise across India." },
        { icon: "Gem", title: "Authentic Vedic Vidhi", desc: "Every ritual performed strictly as per Vedic scriptures and tradition." },
        { icon: "Telescope", title: "Accurate Kundli Analysis", desc: "Precise astrological reading with detailed birth chart analysis." },
        { icon: "HandHeart", title: "Personalized Guidance", desc: "Tailored advice and solutions for your unique situation and needs." },
        { icon: "Globe", title: "Pan India Service", desc: "Available across all major cities in India for religious ceremonies." },
        { icon: "Star", title: "5000+ Happy Families", desc: "Trusted by thousands of families across India for generations." },
      ],
    },
    testimonials: [
      { name: "Amit Sharma", city: "Delhi", text: "Pandit Ji performed our Vivah Sanskar beautifully. His deep knowledge of Vedic rituals made our wedding truly divine. Highly recommended!", stars: 5 },
      { name: "Priya Gupta", city: "Mumbai", text: "We called Pandit Ji for Grih Pravesh Pooja. His calm demeanor and perfect chanting filled our home with positive energy.", stars: 5 },
      { name: "Rajesh Verma", city: "Ghaziabad ", text: "The Satyanarayan Katha was performed with such devotion. Pandit Ji explained every ritual beautifully. A truly blessed experience.", stars: 5 },
      { name: "Sunita Devi", city: "Lucknow", text: "Kundli consultation with Pandit Ji was very accurate. His predictions and guidance have helped our family tremendously.", stars: 5 },
      { name: "Mohit Agarwal", city: "Jaipur", text: "Havan performed by Pandit Ji for our new office. The entire atmosphere was sanctified. Business has been great since then!", stars: 5 },
      { name: "Kavita Singh", city: "Allahabad", text: "Pandit Ji's love and relationship guidance helped resolve our family issues. A genuine and pious soul. God bless him.", stars: 5 },
    ],
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Which services do you provide?", a: "We provide Havan, Vivah Sanskar, Grih Pravesh, Satyanarayan Katha, Kundli Analysis, Namkaran, and all Vedic rituals." },
        { q: "Do you travel outside Ghaziabad ?", a: "Yes, we provide services across all major cities in India. Travel arrangements can be discussed during booking." },
        { q: "How to book a Pooja?", a: "Simply call us, send a WhatsApp message, or fill out the contact form. We will confirm within 24 hours." },
        { q: "What is the cost of Pooja?", a: "Cost varies by the type and scale of ritual. Contact us for a personalized quote based on your requirements." },
        { q: "How much advance notice is needed?", a: "For regular poojas, 3–5 days notice is sufficient. For weddings and large events, please book at least 1 month in advance." },
      ],
    },
    contact: {
      title: "Contact Us",
      name: "Your Name", email: "Your Email", phone: "Your Phone", message: "Your Message", send: "Send Message",
      location: "Based in Ghaziabad , India",
    },
  },
  hindi: {
    nav: { home: "होम", about: "परिचय", services: "सेवाएं", contact: "संपर्क", book: "पूजा बुक करें" },
    hero: {
      name: "आचार्य श्री राजीवनंद जी महाराज",
      subtitle: "वैदिक पूजा एवं ज्योतिष सेवाएं",
      desc: "हवन, विवाह, गृह प्रवेश और कुंडली परामर्श के लिए अनुभवी पंडित।",
      call: "अभी कॉल करें", whatsapp: "व्हाट्सएप",
      badge1: "20+ वर्ष", badge2: "5000+ पूजाएं", badge3: "पूरे भारत में",
    },
  about: {
  title: "आचार्य जी के बारे में",
  intro: "आचार्य श्री राजीवनंद जी महाराज एक प्रतिष्ठित आध्यात्मिक प्रवक्ता एवं विद्वान वैदिक आचार्य हैं। वे श्री राम कथा के प्रसिद्ध वक्ता तथा समस्त वैदिक कर्मकांड के विशेषज्ञ हैं। वेद, शास्त्र, पूजन-विधि एवं ज्योतिष शास्त्र में उनका गहन ज्ञान है। उन्होंने संस्कृत विषय में एम.ए. की उपाधि प्राप्त की है, जो उनके आध्यात्मिक एवं शैक्षिक ज्ञान की दृढ़ नींव को दर्शाता है।",
  bullets: [
    { icon: "ScrollText", text: "श्री राम कथा एवं समस्त वैदिक कर्मकांड (हवन, विवाह, गृह प्रवेश, नामकरण, मुंडन, सत्यनारायण कथा) में विशेषज्ञ" },
    { icon: "Telescope", text: "कुंडली विश्लेषण एवं पाराशरी ज्योतिष विशेषज्ञ — विवाह, करियर, स्वास्थ्य एवं जीवन मार्गदर्शन" },
    { icon: "Sparkles", text: "श्री राजीवनंद जी महाराज (हरिद्वार वाले) के नाम से प्रसिद्ध" },
    { icon: "Globe", text: "समाज में सनातन धर्म, संस्कार एवं सकारात्मक ऊर्जा के प्रसार हेतु समर्पित" },
  ],
},
    services: {
      title: "हमारी सेवाएं",
      items: [
        { title: "हवन एवं गृह शांति", desc: "वैदिक मंत्रों और गृह शांति अनुष्ठानों से घर में शांति और सद्भाव लाएं।" },
        { title: "विवाह संस्कार", desc: "परंपरागत विवाह समारोह प्रामाणिकता और दैवीय आशीर्वाद के साथ संपन्न।" },
        { title: "गृह प्रवेश पूजा", desc: "नए घर को समृद्धि और सकारात्मकता से आशीर्वादित करने के लिए गृह प्रवेश पूजा।" },
        { title: "सत्यनारायण कथा", desc: "बाधाओं को दूर करने और समृद्धि को आमंत्रित करने के लिए पवित्र सत्यनारायण कथा।" },
        { title: "नामकरण संस्कार", desc: "वैदिक मंत्रों और दैवीय आशीर्वाद के साथ पवित्र नामकरण संस्कार।" },
      ],
      astroCard: {
        title: "कुंडली विश्लेषण एवं ज्योतिष",
        subtitle: "प्रेम एवं रिश्ते की समस्या समाधान",
        kundliItems: ["प्रेम विवाह की समस्याएं", "ब्रेकअप की समस्याएं", "परिवार की स्वीकृति", "विवाह में देरी"],
        loveItems: ["प्रेम विवाह की समस्याएं", "परिवार की स्वीकृति", "विवाह में देरी", "अनुकूलता जाँच"],
      },
    },
    why: {
      title: "हमें क्यों चुनें?",
      items: [
        { icon: "Trophy", title: "20+ वर्षों का अनुभव", desc: "दशकों की प्रामाणिक वैदिक साधना और अनुष्ठान विशेषज्ञता।" },
        { icon: "Gem", title: "प्रामाणिक वैदिक विधि", desc: "प्रत्येक अनुष्ठान वैदिक शास्त्रों के अनुसार सम्पन्न।" },
        { icon: "Telescope", title: "सटीक कुंडली विश्लेषण", desc: "विस्तृत जन्म कुंडली के साथ सटीक ज्योतिषीय पाठन।" },
        { icon: "HandHeart", title: "व्यक्तिगत मार्गदर्शन", desc: "आपकी विशेष परिस्थिति के लिए अनुकूलित सलाह और समाधान।" },
        { icon: "Globe", title: "पूरे भारत में सेवा", desc: "सभी प्रमुख धार्मिक समारोहों के लिए पूरे भारत में उपलब्ध।" },
        { icon: "Star", title: "5000+ खुश परिवार", desc: "पीढ़ियों से हजारों परिवारों का भरोसा।" },
      ],
    },
    testimonials: [
      { name: "अमित शर्मा", city: "दिल्ली", text: "पंडित जी ने हमारा विवाह संस्कार बहुत सुंदर तरीके से कराया। उनके वैदिक ज्ञान ने हमारी शादी को दिव्य बना दिया।", stars: 5 },
      { name: "प्रिया गुप्ता", city: "मुंबई", text: "हमने गृह प्रवेश पूजा के लिए पंडित जी को बुलाया। उनके मंत्रोच्चार ने घर में सकारात्मक ऊर्जा भर दी।", stars: 5 },
      { name: "राजेश वर्मा", city: "वाराणसी", text: "सत्यनारायण कथा इतनी भक्ति से कराई गई। पंडित जी ने हर विधि सुंदर ढंग से समझाई। सच में अद्भुत अनुभव।", stars: 5 },
      { name: "सुनीता देवी", city: "लखनऊ", text: "पंडित जी की कुंडली परामर्श बहुत सटीक थी। उनके मार्गदर्शन से हमारे परिवार को बहुत लाभ हुआ।", stars: 5 },
      { name: "मोहित अग्रवाल", city: "जयपुर", text: "नए ऑफिस के लिए हवन कराया। पूरा माहौल पवित्र हो गया। तब से व्यापार बहुत अच्छा चल रहा है!", stars: 5 },
      { name: "कविता सिंह", city: "इलाहाबाद", text: "पंडित जी के मार्गदर्शन से हमारे परिवार की समस्याएं सुलझ गईं। सच्चे और पवित्र आत्मा हैं।", stars: 5 },
    ],
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        { q: "आप कौन सी सेवाएं प्रदान करते हैं?", a: "हम हवन, विवाह संस्कार, गृह प्रवेश, सत्यनारायण कथा, कुंडली विश्लेषण, नामकरण और सभी वैदिक अनुष्ठान करते हैं।" },
        { q: "क्या आप वाराणसी के बाहर भी जाते हैं?", a: "हाँ, हम पूरे भारत के प्रमुख शहरों में सेवाएं प्रदान करते हैं। बुकिंग के समय यात्रा व्यवस्था पर चर्चा की जा सकती है।" },
        { q: "पूजा बुक कैसे करें?", a: "बस हमें कॉल करें, WhatsApp संदेश भेजें, या संपर्क फ़ॉर्म भरें। हम 24 घंटे में तारीख और समय की पुष्टि करेंगे।" },
        { q: "पूजा की लागत क्या है?", a: "लागत अनुष्ठान के प्रकार और पैमाने पर निर्भर करती है। व्यक्तिगत उद्धरण के लिए संपर्क करें।" },
        { q: "कितनी पहले बुकिंग करनी होगी?", a: "सामान्य पूजाओं के लिए 3-5 दिन पर्याप्त हैं। विवाह और बड़े आयोजनों के लिए कम से कम 1 महीने पहले बुक करें।" },
      ],
    },
    contact: {
      title: "संपर्क करें",
      name: "आपका नाम", email: "आपका ईमेल", phone: "आपका फ़ोन", message: "आपका संदेश", send: "संदेश भेजें",
      location: "वाराणसी, भारत में स्थित",
    },
  },
  sanskrit: {
    nav: { home: "मुखपृष्ठम्", about: "परिचयः", services: "सेवाः", contact: "सम्पर्कः", book: "पूजां निश्चिनोतु" },
    hero: {
      name: "आचार्य श्री राजीवनंद जी महाराज",
      subtitle: "वैदिक पूजा एवं ज्योतिष-सेवाः",
      desc: "हवन-विवाह-गृहप्रवेश-कुण्डलीपरामर्शेषु अनुभवी पण्डितः।",
      call: "अभी कॉल करें", whatsapp: "व्हाट्सएप",
      badge1: "२०+ वर्षाणि", badge2: "५०००+ पूजाः", badge3: "सम्पूर्णभारते",
    },
 about: {
  title: "पण्डितस्य परिचयः",
  intro: "आचार्यः श्रीराजीवानन्दजीमहाराजः विद्वान् अनुभवी च वैदिकपुरोहितः सन्ति। तेषां वेदेषु, शास्त्रेषु, पूजनविधौ, समस्तकर्मकाण्डेषु तथा ज्योतिषशास्त्रे गाढं पाण्डित्यम् अस्ति। ते संस्कृतविषये एम.ए. उपाधिं प्राप्तवन्तः। ते श्रीरामकथायाः प्रख्यातः वक्ता अपि सन्ति तथा कुण्डलीविशेषज्ञः इति रूपेण प्रसिद्धाः सन्ति।",
  bullets: [
    { icon: "ScrollText", text: "श्रीरामकथायाः वाचकः तथा हवन-विवाह-गृहप्रवेश-नामकरण-मुण्डन-सत्यनारायणकथादिषु विशेषज्ञः" },
    { icon: "Telescope", text: "कुण्डलीविश्लेषणे पाराशरीज्योतिषे च निपुणः — विवाह-व्यवसाय-स्वास्थ्यादीनां मार्गदर्शनम्" },
    { icon: "Sparkles", text: "श्रीराजीवानन्दजीमहाराजः (हरिद्वारवासीयः) इति नाम्ना प्रसिद्धः" },
    { icon: "Globe", text: "लक्ष्यम् — समाजे धर्मस्य, संस्कारस्य, सद्भावनायाः च प्रचारः" },
  ],
},
    services: {
      title: "अस्माकं सेवाः",
      items: [
        { title: "हवनं गृहशान्तिश्च", desc: "वैदिकमन्त्रैः गृहशान्तिकर्मभिश्च गृहे शान्तिं सौहार्दं च आनयति।" },
        { title: "विवाहसंस्कारः", desc: "परम्परागतः विवाहसमारोहः प्रामाणिकतया दैविकाशीर्वादेन च सम्पन्नः।" },
        { title: "गृहप्रवेशपूजा", desc: "नूतनगृहं समृद्ध्या सकारात्मकतया च आशीर्वादयितुं गृहप्रवेशपूजा।" },
        { title: "सत्यनारायणकथा", desc: "बाधान् निवारयितुं समृद्धिम् आमन्त्रयितुं च पवित्रा सत्यनारायणकथा।" },
        { title: "नामकरणसंस्कारः", desc: "वैदिकमन्त्रैः दैविकाशीर्वादेन च पवित्रः नामकरणसंस्कारः।" },
      ],
      astroCard: {
        title: "कुण्डलीविश्लेषणं ज्योतिषश्च",
        subtitle: "प्रेम-सम्बन्धसमस्यानिवारणम्",
        kundliItems: ["प्रेमविवाहसमस्याः", "विच्छेदसमस्याः", "परिवारस्वीकृतिसमस्याः", "विवाहविलम्बः"],
        loveItems: ["प्रेमविवाहसमस्याः", "परिवारस्वीकृतिसमस्याः", "विवाहविलम्बः", "अनुकूलतापरीक्षणम्"],
      },
    },
    why: {
      title: "अस्मान् किमर्थं वरयन्ति?",
      items: [
        { icon: "Trophy", title: "२०+ वर्षाणां अनुभवः", desc: "दशकानां प्रामाणिकी वैदिकसाधना अनुष्ठानविशेषज्ञता च।" },
        { icon: "Gem", title: "प्रामाणिकी वैदिकविधिः", desc: "प्रत्येकः अनुष्ठानः वैदिकशास्त्रानुसारं सम्पाद्यते।" },
        { icon: "Telescope", title: "सटीकं कुण्डलीविश्लेषणम्", desc: "विस्तृतजन्मकुण्डल्या सह सटीकं ज्योतिषपठनम्।" },
        { icon: "HandHeart", title: "व्यक्तिगतं मार्गदर्शनम्", desc: "भवतः विशिष्टपरिस्थित्यर्थम् अनुकूलितः उपदेशः।" },
        { icon: "Globe", title: "सम्पूर्णभारते सेवा", desc: "सर्वेषु प्रमुखधार्मिकसमारोहेषु भारते उपलब्धः।" },
        { icon: "Star", title: "५०००+ सुखी परिवाराः", desc: "पीढ़ीभिः सहस्रशः परिवाराणां विश्वासपात्रः।" },
      ],
    },
    testimonials: [
      { name: "अमित शर्मा", city: "दिल्ली", text: "पण्डितजी अस्माकं विवाहसंस्कारं सुन्दरतया असम्पादयत्। तेषां वैदिकज्ञानं अस्माकं विवाहं दिव्यम् अकरोत्।", stars: 5 },
      { name: "प्रिया गुप्ता", city: "मुम्बई", text: "गृहप्रवेशपूजायै पण्डितजीम् अहूयाम। तेषां मन्त्रोच्चारणेन गृहे सकारात्मकशक्तिः अपूर्यत।", stars: 5 },
      { name: "राजेश वर्मा", city: "वाराणसी", text: "सत्यनारायणकथा इयती भक्त्या सम्पादिता। पण्डितजी प्रत्येकं विधिं सुन्दरतया अवोचत्। अद्भुतम् अनुभवम्।", stars: 5 },
      { name: "सुनीता देवी", city: "लखनऊ", text: "पण्डितजीस्य कुण्डलीपरामर्शः अतिसटीकः आसीत्। तेषां मार्गदर्शनेन अस्माकं परिवाराय बहु लाभः अभवत्।", stars: 5 },
      { name: "मोहित अग्रवाल", city: "जयपुर", text: "नूतनकार्यालयाय हवनम् असम्पादयत्। सम्पूर्णः वातावरणः पवित्रः अभवत्। तदारभ्य व्यापारः उत्तमः चलति।", stars: 5 },
      { name: "कविता सिंह", city: "इलाहाबाद", text: "पण्डितजीस्य मार्गदर्शनेन अस्माकं परिवारस्य समस्याः निराकृताः। सत्यः पवित्रश्च आत्मा।", stars: 5 },
    ],
    faq: {
      title: "प्रायः पृच्छ्यमानाः प्रश्नाः",
      items: [
        { q: "भवान् काः सेवाः प्रददाति?", a: "वयं हवन-विवाहसंस्कार-गृहप्रवेश-सत्यनारायणकथा-कुण्डलीविश्लेषण-नामकरण-सर्वान् च वैदिकानुष्ठानान् कुर्मः।" },
        { q: "किं भवान् वाराणस्याः बहिः गच्छति?", a: "आम्, वयं भारतस्य सर्वेषु प्रमुखनगरेषु सेवाः प्रददामः। बुकिंगसमये यात्राव्यवस्थायाः विषये चर्चा कर्तुं शक्यते।" },
        { q: "पूजां कथं निश्चिनोतु?", a: "केवलं अस्मान् कॉलयतु, WhatsApp सन्देशं प्रेषयतु, वा सम्पर्कप्रपत्रं पूरयतु। वयं २४ घण्टाभ्यन्तरे पुष्टिकरिष्यामः।" },
        { q: "पूजायाः व्ययः कः?", a: "व्ययः अनुष्ठानस्य प्रकारेण परिमाणेन च भवति। व्यक्तिगतोद्धरणाय सम्पर्कयतु।" },
        { q: "कति पूर्वं बुकिंगं करणीया?", a: "सामान्यपूजाभ्यः ३-५ दिनाः पर्याप्ताः। विवाहेभ्यः वृहदायोजनेभ्यश्च न्यूनातिन्यूनं १ मासपूर्वं निश्चिनोतु।" },
      ],
    },
    contact: {
      title: "सम्पर्कः",
      name: "भवतः नाम", email: "भवतः ईमेल", phone: "भवतः दूरभाषः", message: "भवतः सन्देशः", send: "सन्देशं प्रेषयतु",
      location: "वाराणसी, भारते स्थितः",
    },
  },
};

const serviceImages = [
  "/hawan.jpeg",
  "/shadi.jpeg",
  "/grih.jpeg",
  "/satya.jpeg",
  "/naam.jpeg",
];

/* ── Icon map ── */
const IconMap = {
  Trophy, Gem, Telescope, HandHeart, Globe, Star,
  GraduationCap, ScrollText, Users, Sparkles, BookOpen,
};

function LucideIcon({ name, size = 20, className = "" }) {
  const Icon = IconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

/* ── Helpers ── */
function SectionTitle({ children, light }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400" />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap px-2 text-orange-800">
        ✦ {children} ✦
      </h2>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400" />
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-amber-200 rounded-xl overflow-hidden mb-3 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-amber-50 hover:bg-amber-100 transition-colors text-left gap-4"
      >
        <span className="font-semibold text-orange-900 text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-orange-600 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 py-3.5 bg-white text-stone-600 text-sm leading-relaxed border-t border-amber-100">{a}</div>
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("english");
  const [slideIdx, setSlideIdx] = useState(0);
  const t = content[lang];
  const totalSlides = 2;

  useEffect(() => {
    const id = setInterval(() => setSlideIdx(p => (p + 1) % totalSlides), 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { setSlideIdx(0); }, [lang]);

  const visibleTests = t.testimonials.slice(slideIdx * 3, slideIdx * 3 + 3);

  return (
    <div className="font-serif bg-amber-50 text-stone-800 min-h-screen overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white/96 backdrop-blur-sm shadow-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl sm:text-3xl text-orange-600 font-bold leading-none">ॐ</span>
            <div className="hidden sm:block">
              <p className="text-base sm:text-lg font-bold text-orange-900 leading-tight">Acharya Shri Rajeevanand Ji Maharaj</p>
              <p className="text-xs text-orange-500">Vedic Pandit • Ghaziabad </p>
            </div>
          </div>
          <div className="hidden lg:flex gap-6 text-base font-medium text-stone-700">
            {["home","about","services","contact"].map(k => (
              <a key={k} href={`#${k}`} className="hover:text-orange-600 transition-colors capitalize relative group">
                {t.nav[k]}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            <div className="flex gap-0.5 bg-amber-100 rounded-full p-1 text-xs font-bold">
              {[["english","EN"],["hindi","हिंदी"],["sanskrit","संस्कृत"]].map(([l, label]) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-2 sm:px-2.5 py-1 rounded-full transition-all ${lang === l ? "bg-orange-600 text-white shadow" : "text-orange-800 hover:bg-orange-100"}`}>
                  {label}
                </button>
              ))}
            </div>
            <a href="#contact" className="bg-orange-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold shadow whitespace-nowrap">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
    <section id="home" className="relative min-h-[65vh] sm:min-h-screen flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/img1.png"
      alt="Temple"
      className="w-full h-full object-cover object-center"
    />
    {/* Overlay for better text readability on small screens */}
    <div className="absolute inset-0 bg-amber-900/20 sm:hidden" />
  </div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-20">
    <div className="max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-500/25 border border-orange-400/40 rounded-full px-3 sm:px-4 py-1.5 mb-3 sm:mb-6 backdrop-blur-sm">
        <span className="text-orange-500 font-bold text-sm sm:text-lg leading-none">ॐ</span>
        <span className="text-orange-500 text-[11px] sm:text-sm font-medium">Vedic Traditions Since Generations</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-800 leading-tight mb-2 sm:mb-3 drop-shadow-xl">
        {t.hero.name}
      </h1>

      {/* Subtitle divider */}
      <div className="flex items-center gap-2 mb-3 sm:mb-6">
        <div className="h-px w-6 sm:w-12 bg-stone-600 flex-shrink-0" />
        <p className="text-stone-600 italic text-sm sm:text-lg font-medium leading-snug">{t.hero.subtitle}</p>
        <div className="h-px w-6 sm:w-12 bg-amber-400 flex-shrink-0" />
      </div>

      {/* Description */}
      <p className="text-orange-500 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-8 max-w-lg">
        {t.hero.desc}
      </p>

      {/* CTA Button */}
      <div className="flex flex-wrap gap-3">
        
        <a  href="tel:+917503510583"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-800 active:bg-orange-900 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 text-sm sm:text-base touch-manipulation"
        >
          <Phone size={15} className="flex-shrink-0" />
          <span>+91 7503510583</span>
        </a>
      </div>

    </div>
  </div>
</section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle>{t.about.title}</SectionTitle>
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div className="relative w-44 h-56 sm:w-56 sm:h-64 md:w-72 md:h-80 overflow-hidden ">
                <img src="/img4.jpeg" alt="Pandit Ji" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-bold text-orange-800 text-xl sm:text-2xl md:text-3xl block mb-3">
                Acharya Shri Rajeevanand Ji Maharaj Ji
              </p>
              {/* Intro paragraph */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
                {t.about.intro}
              </p>
              {/* Bullet points with Lucide icons */}
              <ul className="space-y-2.5 mb-5">
                {t.about.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-left">
                    <span className="flex-shrink-0 w-7 h-7 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center mt-0.5">
                      <LucideIcon name={b.icon} size={14} className="text-orange-600" />
                    </span>
                    <span className="text-stone-600 text-sm sm:text-base leading-snug">{b.text}</span>
                  </li>
                ))}
              </ul>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                {[["ScrollText","Vedic Scholar"],["Telescope","Jyotish Acharya"],["HandHeart","Dharma Sevak"]].map(([ic,lb]) => (
                  <span key={lb} className="flex items-center gap-1.5 text-xs sm:text-sm bg-amber-50 border border-amber-200 text-orange-800 px-3 py-1.5 rounded-full font-medium">
                    <LucideIcon name={ic} size={13} className="text-orange-600" />
                    {lb}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle>{t.services.title}</SectionTitle>
          {/* Top 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5">
            {t.services.items.slice(0,4).map((s,i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100 group">
                <div className="h-44 sm:h-52 overflow-hidden">
                  <img src={serviceImages[i]} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-orange-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100 group">
              <div className="h-40 overflow-hidden">
                <img src={serviceImages[4]} alt={t.services.items[4].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-orange-800 text-sm mb-1">{t.services.items[4].title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{t.services.items[4].desc}</p>
              </div>
            </div>
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-xl min-h-52">
              <img src="/img5.png" alt="stars" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-amber-700 text-sm sm:text-base md:text-lg mb-3">🔭 {t.services.astroCard.title}</h3>
                  <ul className="space-y-2">
                    {t.services.astroCard.kundliItems.map((item,i) => (
                      <li key={i} className="flex items-center gap-2 text-amber-600 text-xs sm:text-sm">
                        <span className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-px bg-amber-500/30 hidden sm:block" />
                <div className="h-px bg-amber-500/30 sm:hidden" />
                <div className="flex-1">
                  <h3 className="font-bold text-pink-800 text-sm sm:text-base md:text-lg mb-3">💕 {t.services.astroCard.subtitle}</h3>
                  <ul className="space-y-2">
                    {t.services.astroCard.loveItems.map((item,i) => (
                      <li key={i} className="flex items-center gap-2 text-amber-600 text-xs sm:text-sm">
                        <span className="w-4 h-4 bg-pink-800 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-orange-300 opacity-5 translate-x-1/3 translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle light>{t.why.title}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {t.why.items.map((item,i) => (
              <div key={i} className="group flex items-start gap-3 sm:gap-4 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 cursor-default hover:bg-amber-50">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-amber-500/20 border border-amber-400/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all">
                  <LucideIcon name={item.icon} size={20} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-600 text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle>What Our Devotees Say</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 min-h-52">
            {visibleTests.map((tv, i) => (
              <div key={`${slideIdx}-${i}`} className="bg-amber-50 rounded-2xl p-4 sm:p-6 shadow-md border border-amber-100 relative flex flex-col">
                <div className="absolute top-3 right-4 text-4xl opacity-20 font-serif text-amber-400 select-none">"</div>
                <div className="flex gap-0.5 mb-2">
                  {Array(tv.stars).fill(0).map((_,si) => (
                    <Star key={si} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 italic flex-1">"{tv.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-amber-100">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {tv.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-orange-900 text-xs sm:text-sm">{tv.name}</p>
                    <p className="text-stone-400 text-xs flex items-center gap-1"><MapPin size={10} /> {tv.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {[0,1].map(i => (
              <button key={i} onClick={() => setSlideIdx(i)}
                className={`rounded-full transition-all duration-300 ${i === slideIdx ? "w-8 h-2.5 bg-orange-600" : "w-2.5 h-2.5 bg-amber-300 hover:bg-amber-400"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle>{t.contact.title}</SectionTitle>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left image panel — fixed compact height */}
            <div className="lg:w-5/12 rounded-2xl overflow-hidden shadow-xl relative" style={{ minHeight: "320px", maxHeight: "400px" }}>
              <img src="/contact.jpeg" alt="Pooja" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/88 via-orange-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl text-amber-300">ॐ</span>
                  <span className="text-white font-bold text-lg">Book Your Pooja</span>
                </div>
                <div className="space-y-2">
                  {[
                    
                    [Phone, "+91 7503510583"],
                    [MessageCircle, "WhatsApp Available 24/7"]
                  ].map(([Icon, txt], idx) => (
                    <div key={idx} className="flex items-center gap-2 text-orange-100 text-sm">
                      <Icon size={14} className="flex-shrink-0" />
                      {txt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Form — compact padding */}
            <div className="lg:w-7/12 bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-amber-100 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input type="text" placeholder={t.contact.name}
                  className="border border-amber-200 rounded-xl px-3 sm:px-4 py-2.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-amber-50 text-sm" />
                <input type="email" placeholder={t.contact.email}
                  className="border border-amber-200 rounded-xl px-3 sm:px-4 py-2.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-amber-50 text-sm" />
              </div>
              <input type="tel" placeholder={t.contact.phone}
                className="w-full border border-amber-200 rounded-xl px-3 sm:px-4 py-2.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-amber-50 text-sm mb-3" />
              <select className="w-full border border-amber-200 rounded-xl px-3 sm:px-4 py-2.5 text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-amber-50 text-sm mb-3 appearance-none cursor-pointer">
                <option value="">Select Service / सेवा चुनें</option>
                {["Havan & Grih Shanti","Vivah Sanskar","Grih Pravesh Pooja","Satyanarayan Katha","Namkaran Sanskar","Kundli Consultation"].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <textarea placeholder={t.contact.message} rows={3}
                className="w-full border border-amber-200 rounded-xl px-3 sm:px-4 py-8 text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-amber-50 text-sm mb-3 resize-none" />
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
                <HandHeart size={18} /> {t.contact.send}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ + MAP ── */}
      <section className="py-15 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle>{t.faq.title}</SectionTitle>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-1/2 w-full">
              {t.faq.items.map((item,i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-100">
                <div className="bg-orange-700 text-white px-4 sm:px-5 py-3 flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="font-bold text-sm">Find Us — Ghaziabad , India</span>
                </div>
                <iframe
                  title="Ghaziabad  Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57930.87491867413!2d82.93286205!3d25.31686545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0xb3e515d4da9aa7!2sGhaziabad %2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-64 sm:h-72 md:h-80"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-orange-950 text-orange-200 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">ॐ</div>
          <h3 className="text-lg sm:text-xl font-bold text-amber-300 mb-1">Acharya Shri Rajeevanand Ji Maharaj</h3>
          <p className="text-orange-300 text-xs sm:text-sm mb-4 sm:mb-5">Vedic Pooja & Astrology Services • Ghaziabad , India</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-orange-300 mb-5 sm:mb-6">
            {["Havan","Vivah","Grih Pravesh","Satyanarayan Katha","Kundli","Namkaran"].map(s => (
              <span key={s} className="hover:text-amber-300 cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
          <div className="border-t border-orange-800 pt-4 sm:pt-5 text-xs text-orange-500">
            © {new Date().getFullYear()} Pandit Acharya Shri Rajeevanand Ji Maharaj. All Rights Reserved. | 📍 Ghaziabad , UP, India
          </div>
        </div>
      </footer>
    </div>
  );
}