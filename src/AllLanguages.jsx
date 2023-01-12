import React from 'react'

//All languages in ISO 639-1 format
const languages = [
    { "code": "aa", "name": "Afar" },
    { "code": "ab", "name": "Abkhazian" },
    { "code": "ae", "name": "Avestan" },
    { "code": "af", "name": "Afrikaans" },
    { "code": "ak", "name": "Akan" },
    { "code": "am", "name": "Amharic" },
    { "code": "an", "name": "Aragonese" },
    { "code": "ar", "name": "Arabic" },
    { "code": "as", "name": "Assamese" },
    { "code": "av", "name": "Avaric" },
    { "code": "ay", "name": "Aymara" },
    { "code": "az", "name": "Azerbaijani" },
    { "code": "ba", "name": "Bashkir" },
    { "code": "be", "name": "Belarusian" },
    { "code": "bg", "name": "Bulgarian" },
    { "code": "bh", "name": "Bihari languages" },
    { "code": "bi", "name": "Bislama" },
    { "code": "bm", "name": "Bambara" },
    { "code": "bn", "name": "Bengali" },
    { "code": "bo", "name": "Tibetan" },
    { "code": "br", "name": "Breton" },
    { "code": "bs", "name": "Bosnian" },
    { "code": "ca", "name": "Catalan; Valencian" },
    { "code": "ce", "name": "Chechen" },
    { "code": "ch", "name": "Chamorro" },
    { "code": "co", "name": "Corsican" },
    { "code": "cr", "name": "Cree" },
    { "code": "cs", "name": "Czech" },
    {
        "code": "cu",
        "name": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"
    },
    { "code": "cv", "name": "Chuvash" },
    { "code": "cy", "name": "Welsh" },
    { "code": "da", "name": "Danish" },
    { "code": "de", "name": "German" },
    { "code": "dv", "name": "Divehi; Dhivehi; Maldivian" },
    { "code": "dz", "name": "Dzongkha" },
    { "code": "ee", "name": "Ewe" },
    { "code": "el", "name": "Greek, Modern (1453-)" },
    { "code": "en", "name": "English" },
    { "code": "eo", "name": "Esperanto" },
    { "code": "es", "name": "Spanish; Castilian" },
    { "code": "et", "name": "Estonian" },
    { "code": "eu", "name": "Basque" },
    { "code": "fa", "name": "Persian" },
    { "code": "ff", "name": "Fulah" },
    { "code": "fi", "name": "Finnish" },
    { "code": "fj", "name": "Fijian" },
    { "code": "fo", "name": "Faroese" },
    { "code": "fr", "name": "French" },
    { "code": "fy", "name": "Western Frisian" },
    { "code": "ga", "name": "Irish" },
    { "code": "gd", "name": "Gaelic; Scomttish Gaelic" },
    { "code": "gl", "name": "Galician" },
    { "code": "gn", "name": "Guarani" },
    { "code": "gu", "name": "Gujarati" },
    { "code": "gv", "name": "Manx" },
    { "code": "ha", "name": "Hausa" },
    { "code": "he", "name": "Hebrew" },
    { "code": "hi", "name": "Hindi" },
    { "code": "ho", "name": "Hiri Motu" },
    { "code": "hr", "name": "Croatian" },
    { "code": "ht", "name": "Haitian; Haitian Creole" },
    { "code": "hu", "name": "Hungarian" },
    { "code": "hy", "name": "Armenian" },
    { "code": "hz", "name": "Herero" },
    {
        "code": "ia",
        "name": "Interlingua (International Auxiliary Language Association)"
    },
    { "code": "id", "name": "Indonesian" },
    { "code": "ie", "name": "Interlingue; Occidental" },
    { "code": "ig", "name": "Igbo" },
    { "code": "ii", "name": "Sichuan Yi; Nuosu" },
    { "code": "ik", "name": "Inupiaq" },
    { "code": "io", "name": "Ido" },
    { "code": "is", "name": "Icelandic" },
    { "code": "it", "name": "Italian" },
    { "code": "iu", "name": "Inuktitut" },
    { "code": "ja", "name": "Japanese" },
    { "code": "jv", "name": "Javanese" },
    { "code": "ka", "name": "Georgian" },
    { "code": "kg", "name": "Kongo" },
    { "code": "ki", "name": "Kikuyu; Gikuyu" },
    { "code": "kj", "name": "Kuanyama; Kwanyama" },
    { "code": "kk", "name": "Kazakh" },
    { "code": "kl", "name": "Kalaallisut; Greenlandic" },
    { "code": "km", "name": "Central Khmer" },
    { "code": "kn", "name": "Kannada" },
    { "code": "ko", "name": "Korean" },
    { "code": "kr", "name": "Kanuri" },
    { "code": "ks", "name": "Kashmiri" },
    { "code": "ku", "name": "Kurdish" },
    { "code": "kv", "name": "Komi" },
    { "code": "kw", "name": "Cornish" },
    { "code": "ky", "name": "Kirghiz; Kyrgyz" },
    { "code": "la", "name": "Latin" },
    { "code": "lb", "name": "Luxembourgish; Letzeburgesch" },
    { "code": "lg", "name": "Ganda" },
    { "code": "li", "name": "Limburgan; Limburger; Limburgish" },
    { "code": "ln", "name": "Lingala" },
    { "code": "lo", "name": "Lao" },
    { "code": "lt", "name": "Lithuanian" },
    { "code": "lu", "name": "Luba-Katanga" },
    { "code": "lv", "name": "Latvian" },
    { "code": "mg", "name": "Malagasy" },
    { "code": "mh", "name": "Marshallese" },
    { "code": "mi", "name": "Maori" },
    { "code": "mk", "name": "Macedonian" },
    { "code": "ml", "name": "Malayalam" },
    { "code": "mn", "name": "Mongolian" },
    { "code": "mr", "name": "Marathi" },
    { "code": "ms", "name": "Malay" },
    { "code": "mt", "name": "Maltese" },
    { "code": "my", "name": "Burmese" },
    { "code": "na", "name": "Nauru" },
    {
        "code": "nb",
        "name": "Bokmål, Norwegian; Norwegian Bokmål"
    },
    { "code": "nd", "name": "Ndebele, North; North Ndebele" },
    { "code": "ne", "name": "Nepali" },
    { "code": "ng", "name": "Ndonga" },
    { "code": "nl", "name": "Dutch; Flemish" },
    { "code": "nn", "name": "Norwegian Nynorsk; Nynorsk, Norwegian" },
    { "code": "no", "name": "Norwegian" },
    { "code": "nr", "name": "Ndebele, South; South Ndebele" },
    { "code": "nv", "name": "Navajo; Navaho" },
    { "code": "ny", "name": "Chichewa; Chewa; Nyanja" },
    { "code": "oc", "name": "Occitan (post 1500)" },
    { "code": "oj", "name": "Ojibwa" },
    { "code": "om", "name": "Oromo" },
    { "code": "or", "name": "Oriya" },
    { "code": "os", "name": "Ossetian; Ossetic" },
    { "code": "pa", "name": "Panjabi; Punjabi" },
    { "code": "pi", "name": "Pali" },
    { "code": "pl", "name": "Polish" },
    { "code": "ps", "name": "Pushto; Pashto" },
    { "code": "pt", "name": "Portuguese" },
    { "code": "qu", "name": "Quechua" },
    { "code": "rm", "name": "Romansh" },
    { "code": "rn", "name": "Rundi" },
    { "code": "ro", "name": "Romanian; Moldavian; Moldovan" },
    { "code": "ru", "name": "Russian" },
    { "code": "rw", "name": "Kinyarwanda" },
    { "code": "sa", "name": "Sanskrit" },
    { "code": "sc", "name": "Sardinian" },
    { "code": "sd", "name": "Sindhi" },
    { "code": "se", "name": "Northern Sami" },
    { "code": "sg", "name": "Sango" },
    { "code": "si", "name": "Sinhala; Sinhalese" },
    { "code": "sk", "name": "Slovak" },
    { "code": "sl", "name": "Slovenian" },
    { "code": "sm", "name": "Samoan" },
    { "code": "sn", "name": "Shona" },
    { "code": "so", "name": "Somali" },
    { "code": "sq", "name": "Albanian" },
    { "code": "sr", "name": "Serbian" },
    { "code": "ss", "name": "Swati" },
    { "code": "st", "name": "Sotho, Southern" },
    { "code": "su", "name": "Sundanese" },
    { "code": "sv", "name": "Swedish" },
    { "code": "sw", "name": "Swahili" },
    { "code": "ta", "name": "Tamil" },
    { "code": "te", "name": "Telugu" },
    { "code": "tg", "name": "Tajik" },
    { "code": "th", "name": "Thai" },
    { "code": "ti", "name": "Tigrinya" },
    { "code": "tk", "name": "Turkmen" },
    { "code": "tl", "name": "Tagalog" },
    { "code": "tn", "name": "Tswana" },
    { "code": "to", "name": "Tonga (Tonga Islands)" },
    { "code": "tr", "name": "Turkish" },
    { "code": "ts", "name": "Tsonga" },
    { "code": "tt", "name": "Tatar" },
    { "code": "tw", "name": "Twi" },
    { "code": "ty", "name": "Tahitian" },
    { "code": "ug", "name": "Uighur; Uyghur" },
    { "code": "uk", "name": "Ukrainian" },
    { "code": "ur", "name": "Urdu" },
    { "code": "uz", "name": "Uzbek" },
    { "code": "ve", "name": "Venda" },
    { "code": "vi", "name": "Vietnamese" },
    { "code": "vo", "name": "Volapük" },
    { "code": "wa", "name": "Walloon" },
    { "code": "wo", "name": "Wolof" },
    { "code": "xh", "name": "Xhosa" },
    { "code": "yi", "name": "Yiddish" },
    { "code": "yo", "name": "Yoruba" },
    { "code": "za", "name": "Zhuang; Chuang" },
    { "code": "zh", "name": "Chinese" },
    { "code": "zu", "name": "Zulu" }
]

export default function AllLanguages({ setLanguage, handleLanguages, name }) {
    console.log(Object.keys(languages))
    function handleLanguage(e) {
        //handleLanguages for Creating a Request/Offer
        if (handleLanguages) handleLanguages(e)
        //setLanguage for signUp
        if (setLanguage) setLanguage([e.target.value])
    }
    return (
        <>
            {/* The name propertie is used to destinguisch beetwen fromLanguage and toLanguage in the Component PostRequest */}
            <select onChange={(e) => handleLanguage(e)} id="languages" name={name ? name : "languages"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Select Language</option>
                {/* Get first the Array of Numbers with .keys later then map through and use the number to get the option */}
                {Object.keys(languages).map((ele) => (
                    <option value={languages[ele].code}>{languages[ele].name}</option>
                ))}
                {/* <option value="sq">Albanian - shqip</option>
                <option value="af">Afrikaans</option>
                <option value="am">Amharic - አማርኛ</option>
                <option value="ar">Arabic - العربية</option>
                <option value="an">Aragonese - aragonés</option>
                <option value="hy">Armenian - հայերեն</option>
                <option value="ast">Asturian - asturianu</option>
                <option value="az">Azerbaijani - azərbaycan dili</option>
                <option value="eu">Basque - euskara</option>
                <option value="be">Belarusian - беларуская</option>
                <option value="bn">Bengali - বাংলা</option>
                <option value="bs">Bosnian - bosanski</option>
                <option value="br">Breton - brezhoneg</option>
                <option value="bg">Bulgarian - български</option>
                <option value="ca">Catalan - català</option>
                <option value="ckb">Central Kurdish - کوردی (دەستنوسی عەرەبی)</option>
                <option value="zh-HK">Chinese (Hong Kong) - 中文（香港）</option>
                <option value="zh-CN">Chinese (Simplified) - 中文（简体）</option>
                <option value="zh-TW">Chinese (Traditional) - 中文（繁體）</option>
                <option value="co">Corsican</option>
                <option value="hr">Croatian - hrvatski</option>
                <option value="cs">Czech - čeština</option>
                <option value="da">Danish - dansk</option>
                <option value="nl">Dutch - Nederlands</option>
                <option value="en">English</option>
                <option value="en-AU">English (Australia)</option>
                <option value="en-CA">English (Canada)</option>
                <option value="en-IN">English (India)</option>
                <option value="en-NZ">English (New Zealand)</option>
                <option value="en-ZA">English (South Africa)</option>
                <option value="en-GB">English (United Kingdom)</option>
                <option value="en-US">English (United States)</option>
                <option value="eo">Esperanto - esperanto</option>
                <option value="et">Estonian - eesti</option>
                <option value="fo">Faroese - føroyskt</option>
                <option value="fil">Filipino</option>
                <option value="fi">Finnish - suomi</option>
                <option value="fr">French - français</option>
                <option value="fr-CA">French (Canada) - français (Canada)</option>
                <option value="fr-FR">French (France) - français (France)</option>
                <option value="fr-CH">French (Switzerland) - français (Suisse)</option>
                <option value="gl">Galician - galego</option>
                <option value="ka">Georgian - ქართული</option>
                <option value="de">German - Deutsch</option>
                <option value="de-AT">German (Austria) - Deutsch (Österreich)</option>
                <option value="de-DE">German (Germany) - Deutsch (Deutschland)</option>
                <option value="de-LI">German (Liechtenstein) - Deutsch (Liechtenstein)</option>
                <option value="de-CH">German (Switzerland) - Deutsch (Schweiz)</option>
                <option value="el">Greek - Ελληνικά</option>
                <option value="gn">Guarani</option>
                <option value="gu">Gujarati - ગુજરાતી</option>
                <option value="ha">Hausa</option>
                <option value="haw">Hawaiian - ʻŌlelo Hawaiʻi</option>
                <option value="he">Hebrew - עברית</option>
                <option value="hi">Hindi - हिन्दी</option>
                <option value="hu">Hungarian - magyar</option>
                <option value="is">Icelandic - íslenska</option>
                <option value="id">Indonesian - Indonesia</option>
                <option value="ia">Interlingua</option>
                <option value="ga">Irish - Gaeilge</option>
                <option value="it">Italian - italiano</option>
                <option value="it-IT">Italian (Italy) - italiano (Italia)</option>
                <option value="it-CH">Italian (Switzerland) - italiano (Svizzera)</option>
                <option value="ja">Japanese - 日本語</option>
                <option value="kn">Kannada - ಕನ್ನಡ</option>
                <option value="kk">Kazakh - қазақ тілі</option>
                <option value="km">Khmer - ខ្មែរ</option>
                <option value="ko">Korean - 한국어</option>
                <option value="ku">Kurdish - Kurdî</option>
                <option value="ky">Kyrgyz - кыргызча</option>
                <option value="lo">Lao - ລາວ</option>
                <option value="la">Latin</option>
                <option value="lv">Latvian - latviešu</option>
                <option value="ln">Lingala - lingála</option>
                <option value="lt">Lithuanian - lietuvių</option>
                <option value="mk">Macedonian - македонски</option>
                <option value="ms">Malay - Bahasa Melayu</option>
                <option value="ml">Malayalam - മലയാളം</option>
                <option value="mt">Maltese - Malti</option>
                <option value="mr">Marathi - मराठी</option>
                <option value="mn">Mongolian - монгол</option>
                <option value="ne">Nepali - नेपाली</option>
                <option value="no">Norwegian - norsk</option>
                <option value="nb">Norwegian Bokmål - norsk bokmål</option>
                <option value="nn">Norwegian Nynorsk - nynorsk</option>
                <option value="oc">Occitan</option>
                <option value="or">Oriya - ଓଡ଼ିଆ</option>
                <option value="om">Oromo - Oromoo</option>
                <option value="ps">Pashto - پښتو</option>
                <option value="fa">Persian - فارسی</option>
                <option value="pl">Polish - polski</option>
                <option value="pt">Portuguese - português</option>
                <option value="pt-BR">Portuguese (Brazil) - português (Brasil)</option>
                <option value="pt-PT">Portuguese (Portugal) - português (Portugal)</option>
                <option value="pa">Punjabi - ਪੰਜਾਬੀ</option>
                <option value="qu">Quechua</option>
                <option value="ro">Romanian - română</option>
                <option value="mo">Romanian (Moldova) - română (Moldova)</option>
                <option value="rm">Romansh - rumantsch</option>
                <option value="ru">Russian - русский</option>
                <option value="gd">Scottish Gaelic</option>
                <option value="sr">Serbian - српски</option>
                <option value="sh">Serbo-Croatian - Srpskohrvatski</option>
                <option value="sn">Shona - chiShona</option>
                <option value="sd">Sindhi</option>
                <option value="si">Sinhala - සිංහල</option>
                <option value="sk">Slovak - slovenčina</option>
                <option value="sl">Slovenian - slovenščina</option>
                <option value="so">Somali - Soomaali</option>
                <option value="st">Southern Sotho</option>
                <option value="es">Spanish - español</option>
                <option value="es-AR">Spanish (Argentina) - español (Argentina)</option>
                <option value="es-419">Spanish (Latin America) - español (Latinoamérica)</option>
                <option value="es-MX">Spanish (Mexico) - español (México)</option>
                <option value="es-ES">Spanish (Spain) - español (España)</option>
                <option value="es-US">Spanish (United States) - español (Estados Unidos)</option>
                <option value="su">Sundanese</option>
                <option value="sw">Swahili - Kiswahili</option>
                <option value="sv">Swedish - svenska</option>
                <option value="tg">Tajik - тоҷикӣ</option>
                <option value="ta">Tamil - தமிழ்</option>
                <option value="tt">Tatar</option>
                <option value="te">Telugu - తెలుగు</option>
                <option value="th">Thai - ไทย</option>
                <option value="ti">Tigrinya - ትግርኛ</option>
                <option value="to">Tongan - lea fakatonga</option>
                <option value="tr">Turkish - Türkçe</option>
                <option value="tk">Turkmen</option>
                <option value="tw">Twi</option>
                <option value="uk">Ukrainian - українська</option>
                <option value="ur">Urdu - اردو</option>
                <option value="ug">Uyghur</option>
                <option value="uz">Uzbek - o‘zbek</option>
                <option value="vi">Vietnamese - Tiếng Việt</option>
                <option value="wa">Walloon - wa</option>
                <option value="cy">Welsh - Cymraeg</option>
                <option value="fy">Western Frisian</option>
                <option value="xh">Xhosa</option>
                <option value="yi">Yiddish</option>
                <option value="yo">Yoruba - Èdè Yorùbá</option>
                <option value="zu">Zulu - isiZulu</option> */}
            </select>
        </>
    )
}
