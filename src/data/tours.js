import southImg from '../assets/south.jpeg';
import chardhamImg from '../assets/chardham.jpeg';
import amarnathImg from '../assets/Amarnath.jpeg';
import northImg from '../assets/north.jpeg';
import khatushyamImg from '../assets/khatushyam.jpeg';
import haridwarImg from '../assets/Haridwar.jpeg';
import goaImg from '../assets/Goa.jpeg';
import thailandImg from '../assets/Thailand.jpeg';


export const getTours = (lang) => {
    const isGu = lang === 'gu';
    return [
        {
            id: 1,
            title: isGu ? "દક્ષિણ - ભારત" : "South India",
            price: isGu ? "₹ ૩૨,૦૦૦/-" : "₹ 32,000/-",
            duration: isGu ? "૧૮/૧૯ દિવસ" : "18/19 Days",
            dates: isGu ? ["૧૮/૦૪/૨૦૨૬"] : ["18/04/2026"],
            image: southImg,
            description: isGu ? "તમારા સપનાનો પ્રવાસ: નાશીક, તિરૂપતી, રામેશ્વરમ અને કન્યાકુમારી સાથે દક્ષિણ ભારતનો સંપૂર્ણ પ્રવાસ." : "Your dream trip: A complete South India tour with Nashik, Tirupati, Rameswaram, and Kanyakumari.",
            itinerary: [
                { day: 1, title: isGu ? "અમદાવાદથી બપોરે ૪ વાગ્યે નાશીક તરફ" : "From Ahmedabad to Nashik at 4 PM", details: isGu ? "જર્ની" : "Journey" },
                { day: 2, title: isGu ? "નાશીક, ત્રંબકેશ્વર, પંચવટી, ગોદાવરી" : "Nashik, Trimbakeshwar, Panchavati, Godavari", details: isGu ? "નાશીક" : "Nashik" },
                { day: 3, title: isGu ? "શનિદેવ, ઘૃષ્ણેશ્વર, ઈલોરા" : "Shanidev, Grishneshwar, Ellora", details: isGu ? "ઘૃષ્ણેશ્વર" : "Grishneshwar" },
                { day: 4, title: isGu ? "પરલી વૈજનાથ, ઔઢા નાગનાથ" : "Parli Vaijnath, Aundha Nagnath", details: isGu ? "જર્ની" : "Journey" },
                { day: 5, title: isGu ? "હૈદરાબાદ (રામોજી ફિલ્મ સીટી - સ્વ ખર્ચે)" : "Hyderabad (Ramoji Film City - Self Expense)", details: isGu ? "હૈદરાબાદ" : "Hyderabad" },
                { day: 6, title: isGu ? "શ્રીશૈલમ - મલ્લીકાર્જુન" : "Srisailam - Mallikarjuna", details: isGu ? "જર્ની" : "Journey" },
                { day: 7, title: isGu ? "તીરૂપતી" : "Tirupati", details: isGu ? "તીરૂપતી" : "Tirupati" },
                { day: 8, title: isGu ? "તીરૂપતી" : "Tirupati", details: isGu ? "તીરૂપતી" : "Tirupati" },
                { day: 9, title: isGu ? "વેલ્લોર, શિવકાંચી, વિષ્ણુકાંચી, કાંચીપુરમ" : "Vellore, Shivakanchi, Vishnukanchi, Kanchipuram", details: isGu ? "મહાબલીપુરમ" : "Mahabalipuram" },
                { day: 10, title: isGu ? "મહાબલીપુરમ, શ્રીરંગમ" : "Mahabalipuram, Srirangam", details: isGu ? "જર્ની" : "Journey" },
                { day: 11, title: isGu ? "રામેશ્વરમ" : "Rameswaram", details: isGu ? "જર્ની" : "Journey" },
                { day: 12, title: isGu ? "કન્યાકુમારી, કેરળ (સ્વ ખર્ચે)" : "Kanyakumari, Kerala (Self Expense)", details: isGu ? "કન્યાકુમારી" : "Kanyakumari" },
                { day: 13, title: isGu ? "કન્યાકુમારી, મદુરાઈ" : "Kanyakumari, Madurai", details: isGu ? "જર્ની" : "Journey" },
                { day: 14, title: isGu ? "મૈસુર" : "Mysore", details: isGu ? "મૈસુર" : "Mysore" },
                { day: 15, title: isGu ? "ઊટી (સ્વ ખર્ચે ત્યાનાં નાના વ્હીકલ માં)" : "Ooty (Self expense in local small vehicle)", details: isGu ? "મૈસુર" : "Mysore" },
                { day: 16, title: isGu ? "બેંગલોર" : "Bangalore", details: isGu ? "જર્ની" : "Journey" },
                { day: 17, title: isGu ? "પંપાસરોવર, શબરી આશ્રમ, અંજની-પર્વત, હંપી" : "Pampa Sarovar, Shabari Ashram, Anjani Parvat, Hampi", details: isGu ? "જર્ની" : "Journey" },
                { day: 18, title: isGu ? "પંઢરપુર" : "Pandharpur", details: isGu ? "મંચર" : "Manchar" },
                { day: 19, title: isGu ? "મંચર, ભીમાશંકર" : "Manchar, Bhimashankar", details: isGu ? "જર્ની" : "Journey" },
                { day: 20, title: isGu ? "અમદાવાદ" : "Ahmedabad", details: isGu ? "અમદાવાદ" : "Ahmedabad" }
            ],
            inclusions: isGu ? [
                "A.C. સ્લીપર બસ",
                "૪ વ્યક્તિ વચ્ચે રૂમ (૩૨૦૦૦/-)",
                "૩ વ્યક્તિ વચ્ચે રૂમ (૩૫૦૦૦/-)",
                "૨ વ્યક્તિ વચ્ચે રૂમ (૩૮૦૦૦/-)",
                "એક ડબલ બેડ અને એક એક્સ્ટ્રા મેટ્રેસ"
            ] : [
                "A.C. Sleeper Bus",
                "Room on 4 sharing (32000/-)",
                "Room on 3 sharing (35000/-)",
                "Room on 2 sharing (38000/-)",
                "One double bed and one extra mattress"
            ],
            foodType: isGu ? "ગુજરાતી ભોજન" : "Gujarati Food",
            busType: isGu ? "A.C. સ્લીપર બસ" : "A.C. Sleeper Bus"
        },
        {
            id: 2,
            title: isGu ? "ચારધામ યાત્રા" : "Chardham Yatra",
            price: isGu ? "₹ ૩૦,૦૦૦/-" : "₹ 30,000/-",
            duration: isGu ? "૧૭ દિવસ" : "17 Days",
            dates: isGu ? ["૧૦/૦૫/૨૦૨૬", "૧૫/૦૫/૨૦૨૬", "૩૦/૦૫/૨૦૨૬", "૦૫/૦૬/૨૦૨૬"] : ["10/05/2026", "15/05/2026", "30/05/2026", "05/06/2026"],
            image: chardhamImg,
            description: isGu ? "બદરી - કેદાર સાથે હરીદ્વાર - ગોકુળ - મથુરા નો પવિત્ર પ્રવાસ." : "A holy journey of Haridwar - Gokul - Mathura along with Badri - Kedar.",
            itinerary: [
                { day: 1, title: isGu ? "અમદાવાદ થી શ્રીનાથજી" : "Ahmedabad to Shrinathji", details: isGu ? "જર્ની" : "Journey" },
                { day: 2, title: isGu ? "શ્રીનાથજી" : "Shrinathji", details: isGu ? "જયપુર" : "Jaipur" },
                { day: 3, title: isGu ? "જયપુર" : "Jaipur", details: isGu ? "ગોકુળ" : "Gokul" },
                { day: 4, title: isGu ? "ગોકુળ, મથુરા, વૃન્દાવન" : "Gokul, Mathura, Vrindavan", details: isGu ? "જર્ની" : "Journey" },
                { day: 5, title: isGu ? "હરિદ્વાર લોકલ સાઈટસીન, મન્શાદેવી, ચંડીદેવી, ગંગાઆરતી" : "Haridwar Local Sightseeing, Mansadevi, Chandidevi, Ganga Aarti", details: isGu ? "હરિદ્વાર (રીક્ષામાં સ્વ ખર્ચે જવુ)" : "Haridwar (Rickshaw on self expense)" },
                { day: 6, title: isGu ? "સવારે હરિદ્વાર થી બારકોટ જવુ" : "Morning from Haridwar to Barkot", details: isGu ? "બારકોટ" : "Barkot" },
                { day: 7, title: isGu ? "શ્યામચટ્ટી જવુ. અહીથી જીપ દ્વારા જાનકીચટ્ટી" : "To Shyamchatti. From here by jeep to Jankichatti", details: isGu ? "બારકોટ (ત્યાથી ઘોડાદોલી દ્વારા યમનોત્રી જઈ સાંજે પરત)" : "Barkot (From there go to Yamunotri by Doli/Horse and return by evening)" },
                { day: 8, title: isGu ? "સવારે ઉત્તરકાશી તરફ રવાના" : "Morning departure towards Uttarkashi", details: isGu ? "ઉત્તરકાશી" : "Uttarkashi" },
                { day: 9, title: isGu ? "ગંગનાની ગરમ પાણી ના કુંડ સ્નાન કરી ગંગોત્રી દર્શન" : "Gangnani hot water spring bath and Gangotri Darshan", details: isGu ? "ઉત્તરકાશી" : "Uttarkashi" },
                { day: 10, title: isGu ? "સવારે ૫ વાગ્યે નીકળી ગુપ્તકાશી પહોંચી રાત રોકાણ" : "Leave at 5 AM to reach Guptkashi for night stay", details: isGu ? "ગુપ્તકાશી" : "Guptkashi" },
                { day: 11, title: isGu ? "ગુપ્તકાશીથી સોનપ્રયાગ, જીપદ્વારા ગૌરીકુંડ, કેદારનાથ" : "Guptkashi to Sonprayag, then by jeep to Gaurikund, Kedarnath", details: isGu ? "સ્વ ખર્ચે (અહી સ્વખર્ચે રોકાણ)" : "Self Expense (Stay here on self expense)" },
                { day: 12, title: isGu ? "કેદારનાથ થી મંદાકીની નદી સ્નાન કરી ગુપ્તકાશી" : "Bath in Mandakini river at Kedarnath and back to Guptkashi", details: isGu ? "ગુપ્તકાશી" : "Guptkashi" },
                { day: 13, title: isGu ? "સવારે ૬ કલાકે પીપલકોટી જવા રવાના" : "Leave for Pipalkoti at 6 AM", details: isGu ? "પીપલકોટી (રસ્તામાં રૂદ્રપ્રયાગ)" : "Pipalkoti (Rudraprayag on the way)" },
                { day: 14, title: isGu ? "બદરીનાથ દર્શન, ગરમ પાણી કુંડ સ્નાન" : "Badrinath Darshan, hot water spring bath", details: isGu ? "પીપલકોટી" : "Pipalkoti" },
                { day: 15, title: isGu ? "પીપલકોટી થી ઋષીકેશ" : "Pipalkoti to Rishikesh", details: isGu ? "હરિદ્વાર" : "Haridwar" },
                { day: 16, title: isGu ? "પુષ્કર તરફ" : "Towards Pushkar", details: isGu ? "પુષ્કર" : "Pushkar" },
                { day: 17, title: isGu ? "પુષ્કર" : "Pushkar", details: isGu ? "રીર્ટન" : "Return" }
            ],
            inclusions: isGu ? [
                "AC સ્લીપર બસ",
                "AC રૂમ",
                "૪ વ્યક્તિ વચ્ચે રૂમ (૩૦૦૦૦/-)",
                "એક ડબલ બેડ અને એક એક્સ્ટ્રા મેટ્રેસ"
            ] : [
                "AC Sleeper Bus",
                "AC Room",
                "Room on 4 sharing (30000/-)",
                "One double bed and one extra mattress"
            ],
            foodType: isGu ? "ગુજરાતી ભોજન" : "Gujarati Food",
            busType: isGu ? "AC સ્લીપર બસ - AC રૂમ" : "AC Sleeper Bus - AC Room"
        },
        {
            id: 3,
            title: isGu ? "અમરનાથ યાત્રા" : "Amarnath Yatra",
            price: isGu ? "₹ ૨૦,૦૦૦/-" : "₹ 20,000/-",
            duration: isGu ? "૧૫ દિવસ" : "15 Days",
            dates: isGu ? ["૩૦/૦૬/૨૦૨૬", "૦૧/૦૭/૨૦૨૬", "૧૬/૦૭/૨૦૨૬", "૧૭/૦૭/૨૦૨૬", "૩૧/૦૭/૨૦૨૬", "૦૧/૦૮/૨૦૨૬"] : ["30/06/2026", "01/07/2026", "16/07/2026", "17/07/2026", "31/07/2026", "01/08/2026"],
            image: amarnathImg,
            description: isGu ? "પવિત્ર અમરનાથ દર્શન, વૈષ્ણોદેવી અને શ્રીનગર ની સુંદર યાત્રા." : "Holy Amarnath Darshan, Vaishnodevi, and a beautiful journey of Srinagar.",
            itinerary: [
                { day: 1, title: isGu ? "અમદાવાદ થી રામદેવરા તરફ" : "Ahmedabad to Ramdevra", details: isGu ? "જર્ની" : "Journey" },
                { day: 2, title: isGu ? "રામદેવરા" : "Ramdevra", details: isGu ? "રામદેવરા" : "Ramdevra" },
                { day: 3, title: isGu ? "રામદેવરા થી સવારે ૬ વાગ્યે નીકળી કરણીમાતા દર્શન કરી અમૃતસર તરફ" : "Leave Ramdevra at 6 AM, Karnimata Darshan, heading to Amritsar", details: isGu ? "જર્ની" : "Journey" },
                { day: 4, title: isGu ? "અમૃતસર સાઈટસીન સ્વખર્ચે બપોરે ૩ વાગ્યે વાઘા બોર્ડર" : "Amritsar sightseeing (self-expense), Wagah Border at 3 PM", details: isGu ? "અમૃતસર" : "Amritsar" },
                { day: 5, title: isGu ? "અમૃતસર થી સવારે ૫ વાગ્યે જમ્મુ સ્ટેડીયમ રજીસ્ટ્રેશન" : "Leave Amritsar at 5 AM for Jammu Stadium Registration", details: isGu ? "સ્ટેડીયમ-સ્વ ખર્ચે" : "Stadium-Self Expense" },
                { day: 6, title: isGu ? "જમ્મુ સ્ટેડીયમ થી આર્મીરક્ષણ સાથે પહેલગામ" : "Jammu Stadium to Pahalgam under Army protection", details: isGu ? "પહેલગામ (રાત્રી રોકાણ સ્વખર્ચે ટેન્ટમાં)" : "Pahalgam (Night stay in tent on self expense)" },
                { day: 7, title: isGu ? "પહેલગામ થી નીકળી બાલતાલ જવા રવાના" : "Leave Pahalgam to head to Baltal", details: isGu ? "બાલતાલ (રાત્રી રોકાણ સ્વખર્ચે ટેન્ટમાં)" : "Baltal (Night stay in tent on self expense)" },
                { day: 8, title: isGu ? "બાલતાલ" : "Baltal", details: isGu ? "બાલતાલ (રાત્રી રોકાણ સ્વખર્ચે ટેન્ટમાં)" : "Baltal (Night stay in tent on self expense)" },
                { day: 9, title: isGu ? "બાલતાલ" : "Baltal", details: isGu ? "બાલતાલ (રાત્રી રોકાણ સ્વખર્ચે ટેન્ટમાં)" : "Baltal (Night stay in tent on self expense)" },
                { day: 10, title: isGu ? "બાલતાલ થી નીકળી સોનમર્ગ સાઈટસીન, શ્રીનગર સાઈટસીન" : "Leave Baltal for Sonmarg and Srinagar sightseeing", details: isGu ? "શ્રીનગર (સાઈટસીન સ્વખર્ચે)" : "Srinagar (Sightseeing on self expense)" },
                { day: 11, title: isGu ? "શ્રીનગરથી ગુલમર્ગ (સ્વખર્ચે) બાદ કટરા જવા રવાના" : "Srinagar to Gulmarg (self expense), then head to Katra", details: isGu ? "જર્ની" : "Journey" },
                { day: 12, title: isGu ? "કટરા આગમન બાદ વૈષ્ણોદેવી દર્શન" : "Arrival at Katra and Vaishnodevi Darshan", details: isGu ? "કટરા" : "Katra" },
                { day: 13, title: isGu ? "કટરા થી શીવખોડી" : "Katra to Shivkhori", details: isGu ? "કટરા (સ્વખર્ચે)" : "Katra (Self expense)" },
                { day: 14, title: isGu ? "કટરા થી સવારે ૬ કલાકે જયપુર રવાના" : "Leave Katra at 6 AM for Jaipur", details: isGu ? "જર્ની" : "Journey" },
                { day: 15, title: isGu ? "જયપુર" : "Jaipur", details: isGu ? "રીર્ટન" : "Return" }
            ],
            inclusions: isGu ? [
                "AC સ્લીપર બસ",
                "AC રૂમ",
                "૪ વ્યક્તિ વચ્ચે રૂમ (૨૦૦૦૦/-)",
                "૩ વ્યક્તિ વચ્ચે રૂમ (૨૨૦૦૦/-)",
                "૨ વ્યક્તિ વચ્ચે રૂમ (૨૫૦૦૦/-)"
            ] : [
                "AC Sleeper Bus",
                "AC Room",
                "Room on 4 sharing (20000/-)",
                "Room on 3 sharing (22000/-)",
                "Room on 2 sharing (25000/-)"
            ],
            foodType: isGu ? "ગુજરાતી ભોજન" : "Gujarati Food",
            busType: isGu ? "AC સ્લીપર બસ - AC રૂમ" : "AC Sleeper Bus - AC Room"
        },
        {
            id: 4,
            title: isGu ? "ઉત્તર પૂર્વ ભારત" : "North East India",
            price: isGu ? "₹ ૩૨,૦૦૦/-" : "₹ 32,000/-",
            duration: isGu ? "૨૧ દિવસ" : "21 Days",
            dates: isGu ? ["૨૮/૦૩/૨૦૨૬"] : ["28/03/2026"],
            image: northImg,
            description: isGu ? "કલકત્તા - ગંગા સાગર - નેપાળ - દાર્જીલીંગ સાથે કામાખ્યામાતા દર્શન." : "Kolkata - Ganga Sagar - Nepal - Darjeeling with Kamakhya Mata Darshan.",
            itinerary: [
                { day: 1, title: isGu ? "અમદાવાદ થી ઉજ્જૈન તરફ" : "Ahmedabad to Ujjain", details: isGu ? "જર્ની" : "Journey" },
                { day: 2, title: isGu ? "ઉજ્જૈન, મહાકાલેશ્વર, કાલભૈરવ, હરસિધ્ધિમાતા, મેલડી માતા" : "Ujjain, Mahakaleshwar, Kalbhairav, Harsiddhimata, Meldhi Mata", details: isGu ? "જર્ની" : "Journey" },
                { day: 3, title: isGu ? "અમરકંટક ઘાટ પર સ્નાન, ચંપારણ" : "Bath at Amarkantak Ghat, Champaran", details: isGu ? "ચંપારણ" : "Champaran" },
                { day: 4, title: isGu ? "ચંપારણ" : "Champaran", details: isGu ? "જર્ની" : "Journey" },
                { day: 5, title: isGu ? "જગન્નાથપુરી, ભુવનેશ્વર લિંગરાજ ભગવાન" : "Jagannath Puri, Bhubaneswar Lingaraj Temple", details: isGu ? "કોણાર્ક" : "Konark" },
                { day: 6, title: isGu ? "કોણાર્ક, સૂર્ય મંદિર, સાક્ષી ગોપાલ" : "Konark, Sun Temple, Sakshi Gopal", details: isGu ? "જર્ની" : "Journey" },
                { day: 7, title: isGu ? "ગંગાસાગર" : "Gangasagar", details: isGu ? "ગંગાસાગર" : "Gangasagar" },
                { day: 8, title: isGu ? "કોલકાતા" : "Kolkata", details: isGu ? "જર્ની" : "Journey" },
                { day: 9, title: isGu ? "સિલીગુડી થઈ નદી સ્નાન કરી કામાખ્યા દેવી" : "Via Siliguri, river bath, then Kamakhya Devi", details: isGu ? "કામાખ્યા દેવી" : "Kamakhya Devi" },
                { day: 10, title: isGu ? "કામાખ્યા દેવી" : "Kamakhya Devi", details: isGu ? "જર્ની" : "Journey" },
                { day: 11, title: isGu ? "સિલીગુડી - દાર્જીલીંગ (સ્વ ખર્ચે)" : "Siliguri - Darjeeling (Self expense)", details: isGu ? "સિલીગુડી" : "Siliguri" },
                { day: 12, title: isGu ? "જનકપુરી તરફ" : "Towards Janakpuri", details: isGu ? "જનકપુરી" : "Janakpuri" },
                { day: 13, title: isGu ? "જનકપુરી બપોરે કાઠમંડુ પશુપતીનાથ તરફ" : "Janakpuri afternoon towards Kathmandu Pashupatinath", details: isGu ? "જર્ની" : "Journey" },
                { day: 14, title: isGu ? "કાઠમંડુ પશુપતીનાથ" : "Kathmandu Pashupatinath", details: isGu ? "કાઠમંડુ" : "Kathmandu" },
                { day: 15, title: isGu ? "કાઠમંડુ પશુપતીનાથ થી મનોકામના દેવી" : "Kathmandu Pashupatinath to Manakamana Devi", details: isGu ? "જર્ની" : "Journey" },
                { day: 16, title: isGu ? "સનોલી બોર્ડર, અયોધ્યા" : "Sunauli Border, Ayodhya", details: isGu ? "જર્ની" : "Journey" },
                { day: 17, title: isGu ? "કાશી - વિશ્વનાથ" : "Kashi - Vishwanath", details: isGu ? "કાશી" : "Kashi" },
                { day: 18, title: isGu ? "પ્રયાગરાજ, ચિત્રકૂટ, ગુપ્ત ગોદાવરી, સતી અનસૂયા" : "Prayagraj, Chitrakoot, Gupt Godavari, Sati Anusuya", details: isGu ? "ચિત્રકૂટ" : "Chitrakoot" },
                { day: 19, title: isGu ? "ઓમકારેશ્વર તરફ" : "Towards Omkareshwar", details: isGu ? "જર્ની" : "Journey" },
                { day: 20, title: isGu ? "ઓમકારેશ્વર" : "Omkareshwar", details: isGu ? "જર્ની" : "Journey" },
                { day: 21, title: isGu ? "અમદાવાદ" : "Ahmedabad", details: isGu ? "અમદાવાદ" : "Ahmedabad" }
            ],
            inclusions: isGu ? [
                "AC સ્લીપર બસ",
                "AC રૂમ",
                "૪ વ્યક્તિ વચ્ચે રૂમ (૩૨૦૦૦/-)",
                "નેપાળ કસ્ટમ ડ્યુટી રૂ. ૧૦૦૦/- આપવાની રહેશે"
            ] : [
                "AC Sleeper Bus",
                "AC Room",
                "Room on 4 sharing (32000/-)",
                "Nepal Customs Duty rs. 1000/- to be paid"
            ],
            foodType: isGu ? "ગુજરાતી ભોજન" : "Gujarati Food",
            busType: isGu ? "AC સ્લીપર બસ - AC રૂમ" : "AC Sleeper Bus - AC Room"
        },
        {
            id: 5,
            title: isGu ? "ખાટુશ્યામ" : "Khatushyam",
            price: isGu ? "₹ ૪,૯૯૯/-" : "₹ 4,999/-",
            duration: isGu ? "૨ દિવસ" : "2 Days",
            dates: isGu ? ["દર શુક્રવારે"] : ["Every Friday"],
            image: khatushyamImg,
            description: isGu ? "જયપુર પુષ્કર સેઠ-સાવરીયાજી: હારે કા સહારા ખાટુશ્યામ હમારા." : "Jaipur Pushkar Seth-Sawariyaji: Haare ka Sahara Khatushyam Hamara.",
            itinerary: [
                { day: 1, title: isGu ? "અમદાવાદથી રાત્રે ૮ વાગ્યે પુષ્કર જવા રવાના" : "From Ahmedabad leave at 8 PM for Pushkar", details: isGu ? "જર્ની" : "Journey" },
                { day: 2, title: isGu ? "પુષ્કર બ્રહ્માજી મંદિર સરોવર, ૧૧ વાગ્યે ભોજન, ખાટુશ્યામ દર્શન" : "Pushkar Brahmaji Temple Sarovar, Lunch at 11 AM, Khatushyam Darshan", details: isGu ? "જયપુર" : "Jaipur" },
                { day: 3, title: isGu ? "જયપુર સવારે ૭ વાગ્યે નાસ્તો સાઈટસીન, ૧૧ વાગ્યે ભોજન બાદ સાવરીયાજી, રાત્રી ભોજન બાદ અમદાવાદ" : "Jaipur 7 AM breakfast and sightseeing, 11 AM lunch then Sawariyaji, night dinner then Ahmedabad", details: isGu ? "અમદાવાદ" : "Ahmedabad" }
            ],
            inclusions: isGu ? [
                "એસી સ્લીપર બસ",
                "હોટેલ (૧ રૂમ-૪ વ્યક્તિ)",
                "ગુજરાતી ભોજન"
            ] : [
                "AC Sleeper Bus",
                "Hotel (1 Room - 4 Persons)",
                "Gujarati Food"
            ],
            foodType: isGu ? "ગુજરાતી ભોજન" : "Gujarati Food",
            busType: isGu ? "એસી સ્લીપર બસ" : "AC Sleeper Bus"
        },
        {
            id: 6,
            title: isGu ? "હરિદ્વાર, ગોકુળ, મથુરા અને વૃંદાવન" : "Haridwar, Gokul, Mathura & Vrindavan",
            price: isGu ? "₹ ૮,૦૦૦/-" : "₹ 8,000/-",
            duration: isGu ? "૬ દિવસ" : "6 Days",
            dates: isGu ? ["૨૧/૦૩/૨૦૨૬"] : ["21/03/2026"],
            image: haridwarImg,
            description: isGu ? "શામળાજી, શ્રીનાથજી, ગોકુળ, મથુરા, વૃંદાવન અને હરિદ્વારને આવરી લેતી ૬ દિવસની સંપૂર્ણ આધ્યાત્મિક યાત્રા. દિવ્ય ગંગા આરતી અને સ્નાનનો અનુભવ કરો. સ્લીપર બસમાં આરામદાયક મુસાફરી." : "A complete 6-day spiritual journey covering Shamlaji, Shrinathji, Gokul, Mathura, Vrindavan, and Haridwar. Experience the divine Ganga Aarti and Snan. Travel comfortably in a Sleeper Bus with Gujarati meals included.",
            itinerary: [
                { day: 1, title: isGu ? "પ્રસ્થાન" : "Departure", details: isGu ? "અમદાવાદથી શામળાજી તરફ યાત્રા શરૂ." : "Journey begins from Ahmedabad towards Shamlaji." },
                { day: 2, title: isGu ? "શામળાજી અને શ્રીનાથજી" : "Shamlaji & Shrinathji", details: isGu ? "શામળાજી અને શ્રીનાથજી મંદિરોના દર્શન." : "Darshan at Shamlaji and Shrinathji temples." },
                { day: 3, title: isGu ? "ગોકુળ અને મથુરા" : "Gokul & Mathura", details: isGu ? "ગોકુળ અને મથુરામાં ભગવાન કૃષ્ણના બાળપણના સ્થાનોની મુલાકાત." : "Visit the childhood places of Lord Krishna in Gokul and Mathura." },
                { day: 4, title: isGu ? "વૃંદાવન" : "Vrindavan", details: isGu ? "બાંકે બિહારી અને પ્રેમ મંદિર સહિત વૃંદાવનના મંદિરોનું દર્શન." : "Explore the temples of Vrindavan including Banke Bihari and Prem Mandir." },
                { day: 5, title: isGu ? "હરિદ્વાર દર્શન" : "Haridwar Darshan", details: isGu ? "હરિદ્વાર પહોંચી હર કી પૌડી ખાતે મંત્રમુગ્ધ ગંગા આરતી અને પવિત્ર સ્નાન." : "Proceed towards the holy city of Haridwar & Witness the mesmerizing Ganga Aarti at Har Ki Pauri and take a holy dip." },
                { day: 6, title: isGu ? "ઋષિકેશ" : "Rishikesh", details: isGu ? "ઋષિકેશ, રામ ઝूला અને લક્ષ્મણ ઝૂલાની મુલાકાત." : "Explore Rishikesh, Ram Jhula, and Laxman Jhula." },
                { day: 7, title: isGu ? "પરત મુસાફરી" : "Return Journey Starts", details: isGu ? "ગુજરાત તરફ પરત મુસાફરી શરૂ." : "Begin the return journey towards Gujarat." }
            ],
            inclusions: isGu ? [
                "સ્લીપર બસ",
                "ગુજરાતી ભોજન"
            ] : [
                "Sleeper Bus",
                "Gujarati meals included"
            ],
            foodType: isGu ? "ગુજરાતી ભોજન" : "Gujarati Food",
            busType: isGu ? "સ્લીપર બસ" : "Sleeper Bus"
        },
        {
            id: 7,
            title: isGu ? "બેંગકોક અને પટ્ટાયા" : "Explore Bangkok & Pattaya",
            price: isGu ? "પૂછપરછ કરો" : "On Request",
            duration: isGu ? "૪ રાત / ૫ દિવસ" : "4 Nights / 5 Days",
            dates: isGu ? ["ટૂંક સમયમાં"] : ["Coming Soon"],
            image: thailandImg,
            description: isGu ? "થાઇલેન્ડની ૪ રાત / ૫ દિવસની રોમાંચક આંતરરાષ્ટ્રીય સફર. જેમાં ટાઇગર ટોપિયા, અલ્કાઝાર શો, કોરલ આઇલેન્ડ અને બેંગકોક સિટી ટૂર સામેલ છે." : "A 4 Nights / 5 Days exciting international trip to Thailand. Includes Tiger Topia Sri Racha, Alcazar Show, Coral Island Tour by Speed Boat, and a comprehensive Bangkok City Tour.",
            itinerary: [
                { day: 1, title: isGu ? "બેંગકોક આગમન" : "Arrival in Bangkok", details: isGu ? "સુવર્ણભૂમિ એરપોર્ટ પર આગમન. પટ્ટાયા ટ્રાન્સફર, ટાઇગર ટોપિયાની મુલાકાત (વાઘ સાથે ફોટો)." : "Arrival at Suvarnabhumi Airport. Transfer to Pattaya via Tiger Topia, Sri Racha (Photo with Tiger)." },
                { day: 2, title: isGu ? "કોરલ આઇલેન્ડ" : "Coral Island", details: isGu ? "સ્પીડ બોટ દ્વારા કોરલ આઇલેન્ડ ટૂર લંચ સાથે." : "Coral Island Tour by Speed Boat with Lunch (SIC Basis)." },
                { day: 3, title: isGu ? "અલ્કાઝાર શો" : "Alcazar Show", details: isGu ? "પટ્ટાયામાં પ્રખ્યાત અલ્કાઝાર શોનો અનુભવ." : "Experience the world-famous Alcazar Show in Pattaya." },
                { day: 4, title: isGu ? "પટ્ટાયા થી બેંગકોક" : "Pattaya to Bangkok", details: isGu ? "બેંગકોક હોટેલ ટ્રાન્સફર. સિટી ટૂર + ટેમ્પલ ટૂર + જેમ્સ ગેલેરી." : "Transfer to Bangkok Hotel. Bangkok City Tour + Temple Tour + Gems Gallery." },
                { day: 5, title: isGu ? "પ્રસ્થાન" : "Departure", details: isGu ? "પરત ફ્લાઇટ માટે બેંગકોક હોટેલથી એરપોર્ટ ટ્રાન્સફર." : "Transfer from Bangkok Hotel to Suvarnabhumi Airport for your return flight." }
            ],
            inclusions: isGu ? [
                "હોટેલ",
                "સાઇટસીન",
                "ટ્રાન્સફર"
            ] : [
                "Hotel Stay",
                "Sightseeing",
                "Transfers"
            ],
            foodType: isGu ? "પ્રમાણભૂત" : "Standard",
            busType: isGu ? "એસી કોચ" : "AC Coach"
        },
        {
            id: 8,
            title: isGu ? "નોર્થ ગોવા" : "Escape to North Goa",
            price: isGu ? "₹ ૭,૫૦૦/-" : "₹ 7,500/-",
            duration: isGu ? "૪ દિવસ" : "4 Days",
            dates: isGu ? ["ટૂંક સમયમાં"] : ["Coming Soon"],
            image: goaImg,
            description: isGu ? "નોર્થ ગોવા સુંદર રિસોર્ટમાં રોકાણ. પેકેજમાં બ્રેકફાસ્ટ, નોર્થ અને સાઉથ ગોવા સાઇટસીન અને ટ્રાન્સફર સામેલ છે." : "Enjoy a relaxing stay at a 3-Star Resort in North Goa. Package includes Breakfast, 1 Day North Goa Sightseeing, 1 Day South Goa Sightseeing, and Airport/Bus transfers.",
            itinerary: [
                { day: 1, title: isGu ? "ગોવા આગમન" : "Arrival in Goa", details: isGu ? "3-સ્ટાર રિસોર્ટમાં ટ્રાન્સફર, ચેક-ઇન અને સ્વિમિંગ પૂલનો આનંદ." : "Transfer to 3 Star Resort. Check-in and relax or enjoy complimentary use of swimming pool." },
                { day: 2, title: isGu ? "નોર્થ ગોવા સાઇટસીન" : "North Goa Sightseeing", details: isGu ? "નોર્થ ગોવાના સુંદર દરિયાકિનારા અને સ્થળોની શોધખોળ." : "Full day exploring the beautiful beaches and sights of North Goa." },
                { day: 3, title: isGu ? "સાઉથ ગોવા સાઇટસીન" : "South Goa Sightseeing", details: isGu ? "સાઉથ ગોવાના વારસા અને શાંત વાતાવરણની મુલાકાત." : "Discover the heritage and serene environment of South Goa." },
                { day: 4, title: isGu ? "પ્રસ્થાન" : "Departure", details: isGu ? "આગળની યાત્રા માટે હોટેલથી એરપોર્ટ/સ્ટેશન ટ્રાન્સફર." : "Transfer from Hotel to Airport/Station for your onward journey." }
            ],
            inclusions: isGu ? [
                "3 સ્ટાર રિસોર્ટ રોકાણ",
                "બ્રેકફાસ્ટ",
                "સાઇટસીન",
                "એરપોર્ટ/બસ ટ્રાન્સફર"
            ] : [
                "3-Star Resort Stay",
                "Breakfast",
                "Sightseeing",
                "Airport/Bus Transfers"
            ],
            foodType: isGu ? "બ્રેકફાસ્ટ સામેલ છે" : "Breakfast Included",
            busType: isGu ? "કાર / કોચ" : "Car / Coach"
        }
    ];
};
