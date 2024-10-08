import type {PhoneticDictionary} from "~/components/AlphabetCard";

const TAG = Object.freeze({
    standard: {label: 'STD', desc: 'ICAO 标准'},
    dx: {label: 'DX', desc: 'DX 通联常用'},
    non_standard: {label: 'N-STD', desc: '非标准'},
})

export const usePersistence = defineStore('persistence', () => {
    const phonetic_dict = ref<PhoneticDictionary>({
        'A': [
            {word: 'alpha', ipa: '/ˈælfə/', tag: TAG.standard},
            {word: 'america', ipa: '/əˈmerɪkə/', tag: TAG.dx},
        ],
        'B': [
            {word: 'bravo', ipa: '/ˈbrɑːvoʊ/', tag: TAG.standard},
            {word: 'boston', ipa: '/ˈbɑstən/', tag: TAG.dx},
        ],
        'C': [
            {word: 'charlie', ipa: '/ˈtʃɑːrli/', tag: TAG.standard},
            {word: 'canada', ipa: '/ˈkænədə/', tag: TAG.dx},
            {word: 'comic', ipa: '/ˈkɒmɪk/', tag: TAG.non_standard},
        ],
        'D': [
            {word: 'delta', ipa: '/ˈdeltə/', tag: TAG.standard},
            {word: 'david', ipa: '/ˈdeɪvɪd/', tag: TAG.non_standard},
            {word: 'danmark', ipa: '/ˈdænmɑ:k/', tag: TAG.non_standard},
        ],
        'E': [
            {word: 'echo', ipa: '/ˈekoʊ/', tag: TAG.standard},
            {word: 'england', ipa: '/ˈɪŋɡlənd/', tag: TAG.dx},
            {word: 'egypt', ipa: '/ˈidʒəpt/', tag: TAG.non_standard},
        ],
        'F': [
            {word: 'foxtrot', ipa: '/ˈfɑːkstrɑːt/', tag: TAG.standard},
            {word: 'france', ipa: '/fræns/', tag: TAG.dx},
            {word: 'florida', ipa: '/ˈflɔrədə/', tag: TAG.non_standard},
        ],
        'G': [
            {word: 'golf', ipa: '/ɡɑːlf/', tag: TAG.standard},
            {word: 'germany', ipa: '/ˈdʒɜːrməni/', tag: TAG.dx},
            {word: 'guatemala', ipa: '/ˌgwɑtəˈmɑlə/', tag: TAG.non_standard},
        ],
        'H': [
            {word: 'hotel', ipa: '/hoʊˈtel/', tag: TAG.standard},
            {word: 'henry', ipa: '/ˈhenri/', tag: TAG.non_standard},
            {word: 'honolulu', ipa: '/ˌhɑnəˈlulu/', tag: TAG.non_standard},
        ],
        'I': [
            {word: 'india', ipa: '/ˈɪndiə/', tag: TAG.standard},
            {word: 'italy', ipa: '/ˈɪtəlɪ/', tag: TAG.dx},
        ],
        'J': [
            {word: 'juliet', ipa: '/ˈdʒuliˌɛt/', tag: TAG.standard},
            {word: 'japan', ipa: '/dʒəˈpæn/', tag: TAG.dx},
        ],
        'K': [
            {word: 'kilo', ipa: '/ˈkiːloʊ/', tag: TAG.standard},
            {word: 'kilowatt', ipa: '/ˈkɪləwɑːt/', tag: TAG.dx},
        ],
        'L': [
            {word: 'lima', ipa: '/ˈliːmə/', tag: TAG.standard},
            {word: 'london', ipa: '/ˈlʌndən/', tag: TAG.dx},
        ],
        'M': [
            {word: 'mike', ipa: '/maɪk/', tag: TAG.standard},
            {word: 'mexico', ipa: '/ˈmɛksəˌkoʊ/', tag: TAG.dx},
        ],
        'N': [
            {word: 'november', ipa: '/noʊˈvembər/', tag: TAG.standard},
            {word: 'norway', ipa: '/ˈnɔrˌweɪ/', tag: TAG.dx},
        ],
        'O': [
            {word: 'oscar', ipa: '/ˈɒskə/', tag: TAG.standard},
            {word: 'ocean', ipa: '/ˈoʊʃn/', tag: TAG.non_standard},
            {word: 'ontario', ipa: '/ɑnˈtɛrioʊ/', tag: TAG.non_standard},
        ],
        'P': [
            {word: 'papa', ipa: '/ˈpɑːpə/', tag: TAG.standard},
            {word: 'pacific', ipa: '/pəˈsɪfɪk/', tag: TAG.dx},
        ],
        'Q': [
            {word: 'quebec', ipa: '/kwəˈbɛk/', tag: TAG.standard},
            {word: 'queen', ipa: '/kwiːn/', tag: TAG.non_standard},
        ],
        'R': [
            {word: 'romeo', ipa: '/ˈroʊmioʊ/', tag: TAG.standard},
            {word: 'radio', ipa: '/ˈreɪdioʊ/', tag: TAG.dx},
        ],
        'S': [
            {word: 'sierra', ipa: '/siˈerə/', tag: TAG.standard},
            {word: 'santiago', ipa: '/ˌsæntiˈɑgoʊ/', tag: TAG.dx},
        ],
        'T': [
            {word: 'tango', ipa: '/ˈtæŋɡoʊ/', tag: TAG.standard},
            {word: 'tokyo', ipa: '/ˈtokjo/', tag: TAG.dx},
            {word: 'texas', ipa: '/ˈtɛksəs/', tag: TAG.non_standard},
        ],
        'U': [
            {word: 'uniform', ipa: '/ˈjuːnɪfɔːrm/', tag: TAG.standard},
            {word: 'united', ipa: '/juˈnaɪtɪd/', tag: TAG.dx},
        ],
        'V': [
            {word: 'victor', ipa: '/ˈvɪktər/', tag: TAG.standard},
            {word: 'victoria', ipa: '/vɪkˈtɔːrɪə/', tag: TAG.dx},
        ],
        'W': [
            {word: 'whiskey', ipa: '/ˈwɪski/', tag: TAG.standard},
            {word: 'washington', ipa: '/ˈwɑʃɪŋtən/', tag: TAG.dx},
        ],
        'X': [
            {word: 'x-ray', ipa: '/ˈeks reɪ/', tag: TAG.standard},
        ],
        'Y': [
            {word: 'yankee', ipa: '/ˈjæŋki/', tag: TAG.standard},
            {word: 'yokohama', ipa: '/ˌjoʊkəˈhɑmə/', tag: TAG.dx},
        ],
        'Z': [
            {word: 'zulu', ipa: '/ˈzuːluː/', tag: TAG.standard},
            {word: 'zanzibar', ipa: '/ˈzænzəˌbɑr/', tag: TAG.non_standard},
        ],
    });
    const number_phonetic_dict = ref<PhoneticDictionary>({
        '0': [{word: 'zero', ipa: '/ˈzɪroʊ/'}],
        '1': [{word: 'one', ipa: '/wʌn/'}],
        '2': [{word: 'two', ipa: '/tuː/'}],
        '3': [{word: 'three', ipa: '/θriː/'}],
        '4': [{word: 'four', ipa: '/fɔːr/'}],
        '5': [{word: 'five', ipa: '/faɪv/'}],
        '6': [{word: 'six', ipa: '/sɪks/'}],
        '7': [{word: 'seven', ipa: '/ˈsevn/'}],
        '8': [{word: 'eight', ipa: '/eɪt/'}],
        '9': [{word: 'nine', ipa: '/naɪn/'}],
    })
    const callsign_templates: {
        [key: string]: string
    } = {
        'China': 'B$c{A|D|G-I}$n{1-8}$c3{A-W}',
        //'HongKong': 'VR2$c3{A-W}',
        //'Macau': 'XX$n$c3{A-W}'
    }

    function to_phonetic(str: string): string[] {
        const persist = usePersistence()
        const full_phonetic_dict = {
            ...persist.phonetic_dict,
            ...persist.number_phonetic_dict
        }
        return str.split('').map(w => full_phonetic_dict[w] ? full_phonetic_dict[w][Math.floor(Math.random() * full_phonetic_dict[w].length)]?.word : w)

    }

    function random_cq(callsign: string) {
        const cqs = [
            `CQ ${callsign}, calling cq and standing by.`,
            `CQ CQ CQ, This is ${callsign}, standing by.`,
            `My call sign is ${callsign}, over.`,
        ]
        return cqs[Math.floor(Math.random() * cqs.length)]
    }

    function random_reply(type: 'cq' | 'qrz', callsign: string, stdOnly: boolean) {
        const persist = usePersistence()
        const full_phonetic_dict = {
            ...persist.phonetic_dict,
            ...persist.number_phonetic_dict
        }
        const callsign_phonetic_map: { [key: string]: string } = {};
        const callsign_phonetic = callsign.split('').map(w => {
            if (!callsign_phonetic_map[w]) {
                const index = (stdOnly || Math.random() < 0.7) ? 0 : Math.floor(Math.random() * full_phonetic_dict[w].length);
                callsign_phonetic_map[w] = full_phonetic_dict[w] ? full_phonetic_dict[w][index]?.word : w;
            }
            return callsign_phonetic_map[w];
        });

        const cqs = [
            `${callsign_phonetic.join(' ')}`,
            `CQ, ${callsign_phonetic.join(' ')}, calling cq and standing by.`,
            `CQ CQ CQ, This is ${callsign_phonetic.join(' ')}, standing by.`,
            `My call sign is ${callsign_phonetic.join(' ')}, over.`,
        ]
        const qrz = [
            `This is ${callsign_phonetic.join('!')}, ${callsign.split('')}`,
            `${callsign_phonetic.join('!')}`
        ]
        switch (type) {
            case "cq":
                return cqs[Math.floor(Math.random() * cqs.length)]
            case "qrz":
                return qrz[Math.floor(Math.random() * qrz.length)]
            default:
                return ''
        }
    }

    return {
        phonetic_tags: TAG,
        phonetic_dict,
        number_phonetic_dict,
        callsign_templates,
        to_phonetic,
        random_cq,
        random_reply
    }
})