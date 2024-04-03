enum tones {
    mid = "Middle",
    low = "Low",
    high = "High"
}

export type consonant = {
    letter: string
    name: string
    pronounciation: string
    // audio: ???
    tone: string
    type: 'consonant'
}


export const consonants: consonant[] = [
    {
        letter: "ก",
        name: "ก ไก่",
        pronounciation: "Gaw Gài",
        tone: tones.mid
    },
    {
        letter: "ข",
        name: "ข ไข่",
        pronounciation: "Kǎw Kài",
        tone: tones.high
    },
    {
        letter: "ฃ",
        name: "ฃ ขวด",
        pronounciation: "Kǎw Kùad",
        tone: tones.high
    },
    {
        letter: "ค",
        name: "ค ควาย",
        pronounciation: "Kaw Kwai",
        tone: tones.low
    },
    {
        letter: "ฅ",
        name: "ฅ คน",
        pronounciation: "Kaw Kon",
        tone: tones.low
    },
    {
        letter: "ฆ",
        name: "ฆ ระฆัง",
        pronounciation: "Kaw Rákang",
        tone: tones.low
    },
    {
        letter: "ง",
        name: "ง งู",
        pronounciation: "Ngaw Ngoo",
        tone: tones.low
    },
    {
        letter: "จ",
        name: "จ จาน",
        pronounciation: "Jaw Jahn",
        tone: tones.mid
    },
    {
        letter: "ฉ",
        name: "ฉ ฉิ่ง",
        pronounciation: "Chaw Ching",
        tone: tones.high
    },
    {
        letter: "ช",
        name: "ช ช้าง",
        pronounciation: "Chaw Cháng",
        tone: tones.low
    },
    {
        letter: "ซ",
        name: "ซ โซ่",
        pronounciation: "Saw Sôh",
        tone: tones.low
    },
    {
        letter: "ฌ",
        name: "ฌ เฌอ",
        pronounciation: "Chaw Cher",
        tone: tones.mid
    },
    {
        letter: "ญ",
        name: "ญ หญิง",
        pronounciation: "Yaw Yǐng",
        tone: tones.low
    },
    {
        letter: "ฎ",
        name: "ฎ ชฎา",
        pronounciation: "Daw Cháda",
        tone: tones.mid
    },
    {
        letter: "ฏ",
        name: "ฏ ปฏัก",
        pronounciation: "Taw Pàtàk",
        tone: tones.mid
    },
    {
        letter: "ฐ",
        name: "ฐ ฐาน",
        pronounciation: "Tǎw Tǎan",
        tone: tones.high
    },
    {
        letter: "ฑ",
        name: "ฑ มณโฑ",
        pronounciation: "Taw Montoh",
        tone: tones.low
    },
    {
        letter: "ฒ",
        name: "ฒ ผู้เผู้ฒ่า",
        pronounciation: "Taw Pûtâo",
        tone: tones.low
    },
    {
        letter: "ณ",
        name: "ณ เณร",
        pronounciation: "Naw Nane",
        tone: tones.low
    },
    {
        letter: "ด",
        name: "ด เด็ก",
        pronounciation: "Daw Dèk",
        tone: tones.mid
    },
    {
        letter: "ต",
        name: "ต เต่า",
        pronounciation: "Taw Táo",
        tone: tones.mid
    },
    {
        letter: "ถ",
        name: "ถ ถุง",
        pronounciation: "Tǎw Tǒong",
        tone: tones.high
    },
    {
        letter: "ท",
        name: "ท ทหาร",
        pronounciation: "Taw Táhan",
        tone: tones.low
    },
    {
        letter: "ธ",
        name: "ธ ธง",
        pronounciation: "Taw Tong",
        tone: tones.low
    },
    {
        letter: "น",
        name: "น หนู",
        pronounciation: "Naw Nǒo",
        tone: tones.low
    },
    {
        letter: "บ",
        name: "บ ใบไม้",
        pronounciation: "Baw Baii-mái",
        tone: tones.mid
    },
    {
        letter: "ป",
        name: "ป ปลา",
        pronounciation: "Baw Bla",
        tone: tones.mid
    },
    {
        letter: "ผ",
        name: "ผ ผึ้ง",
        pronounciation: "Pǎw Pêung",
        tone: tones.high
    },
    {
        letter: "ฝ",
        name: "ฝ ฝา",
        pronounciation: "Fǎw Fǎh",
        tone: tones.high
    },
    {
        letter: "พ",
        name: "พ พาน",
        pronounciation: "Paw Paan",
        tone: tones.low
    },
    {
        letter: "ฟ",
        name: "ฟ ฟัน",
        pronounciation: "Faw Fun",
        tone: tones.low
    },
    {
        letter: "ภ",
        name: "ภ ภูเบศ",
        pronounciation: "Paw Sǔmpao",
        tone: tones.low
    },
    {
        letter: "ม",
        name: "ม ม้า",
        pronounciation: "Maw Máh",
        tone: tones.low
    },
    {
        letter: "ย",
        name: "ย ยักษ์",
        pronounciation: "Yaw Yák",
        tone: tones.low
    },
    {
        letter: "ร",
        name: "ร เรือ",
        pronounciation: "Raw Rua",
        tone: tones.low
    },
    {
        letter: "ล",
        name: "ล ลิง",
        pronounciation: "Law Ling",
        tone: tones.low
    },
    {
        letter: "ว",
        name: "ว แหวน",
        pronounciation: "Wor Wǎen",
        tone: tones.low
    },
    {
        letter: "ศ",
        name: "ศ ศาลา",
        pronounciation: "Sǎw Sǎla",
        tone: tones.high
    },
    {
        letter: "ษ",
        name: "ษ ฤๅษี",
        pronounciation: "Sǎw Rúe-sěe",
        tone: tones.high
    },
    {
        letter: "ส",
        name: "ส เสือ",
        pronounciation: "Saw Sǔa",
        tone: tones.high
    },
    {
        letter: "ห",
        name: "ห หีบ",
        pronounciation: "Hǎw Hèeb",
        tone: tones.high
    },
    {
        letter: "ฬ",
        name: "ฬ จุฬา",
        pronounciation: "Law Chùla",
        tone: tones.low
    },
    {
        letter: "อ",
        name: "อ อ่าง",
        pronounciation: "Aw Àhng",
        tone: tones.mid
    },
    {
        letter: "ฮ",
        name: "ฮ นกฮูก",
        pronounciation: "Haw Nók-hôog",
        tone: tones.low
    }
].map(consonant => ({ ...consonant, type: 'consonant' }));

export type vowel = {
    letter: string
    sound: string
    // audio: ???
    short: string
    type: 'vowel'
}

function isShort(val: boolean): string {
    return val ? "Short" : "Long"
}

export const vowels: vowel[] = [
    {
        letter: "-ะ",
        sound: "Ah",
        short: isShort(true)
    },
    {
        letter: "-า",
        sound: "Ah",
        short: isShort(false)
    },
    {
        letter: "-ิ",
        sound: "Ee",
        short: isShort(true)
    },
    {
        letter: "-ี",
        sound: "Ee",
        short: isShort(false)
    },
    {
        letter: "-ึ",
        sound: "Ue",
        short: isShort(true)
    },
    {
        letter: "-ื",
        sound: "Ue",
        short: isShort(false)
    },
    {
        letter: "-ุ",
        sound: "Oo",
        short: isShort(true)
    },
    {
        letter: "-ู",
        sound: "Oo",
        short: isShort(false)
    },
    {
        letter: "เ-ะ",
        sound: "Eh",
        short: isShort(true)
    },
    {
        letter: "เ",
        sound: "Eh",
        short: isShort(false)
    },
    {
        letter: "แ-ะ",
        sound: "Ae",
        short: isShort(true)
    },
    {
        letter: "แ-",
        sound: "Ae",
        short: isShort(false)
    },
    {
        letter: "โ-ะ",
        sound: "Oh",
        short: isShort(true)
    },
    {
        letter: "โ-",
        sound: "Oh",
        short: isShort(false)
    },
    {
        letter: "เ-าะ",
        sound: "Aw",
        short: isShort(true)
    },
    {
        letter: "-อ",
        sound: "Aw",
        short: isShort(false)
    },
    {
        letter: "เ-ียะ",
        sound: "Ia",
        short: isShort(true)
    },
    {
        letter: "เ-ีย",
        sound: "Ia",
        short: isShort(false)
    },
    {
        letter: "เ-อะ",
        sound: "Er",
        short: isShort(true)
    },
    {
        letter: "เ-อ",
        sound: "Er",
        short: isShort(false)
    },
    {
        letter: "เ-ือะ",
        sound: "Uea",
        short: isShort(true)
    },
    {
        letter: "เ-ือ",
        sound: "Uea",
        short: isShort(false)
    },
    {
        letter: "-ัวะ",
        sound: "Ua",
        short: isShort(true)
    },
    {
        letter: "-ัว",
        sound: "Ua",
        short: isShort(false)
    },
    {
        letter: "ฤ",
        sound: "Rue",
        short: isShort(true)
    },
    {
        letter: "ฤๅ",
        sound: "Rue",
        short: isShort(false)
    },
    {
        letter: "ฦ",
        sound: "Lue",
        short: isShort(true)
    },
    {
        letter: "ฦๅ",
        sound: "Lue",
        short: isShort(false)
    },
    {
        letter: "-ำ",
        sound: "Um",
        short: isShort(true)
    },
    {
        letter: "ไ-",
        sound: "Ai",
        short: isShort(true)
    },
    {
        letter: "ใ-",
        sound: "Ai",
        short: isShort(true)
    },
    {
        letter: "เ-า",
        sound: "Ao",
        short: isShort(true)
    }
].map(vowel => ({ ...vowel, type: 'vowel' }));

export function isConsonant(content: consonant | vowel): content is consonant {
    return content.type === 'consonant';
}

export function colorCode(content: consonant | vowel, border: boolean): string | undefined {
    if (isConsonant(content)) {
        switch (content.tone) {
            case tones.mid:
                return border ? "border-tileBlue" : "bg-tileBlue";
            case tones.low:
                return border ? "border-tileYellow" : "bg-tileYellow";
            case tones.high:
                return border ? "border-tileRed" : "bg-tileRed";
        }
    } else {
        switch (content.short) {
            case "Short":
                return border ? "border-tileGreen" : "bg-tileGreen";
            case "Long":
                return border ? "border-tilePurple" : "bg-tilePurple";
        }
    }
    
    return ""; // Default return statement
}

import { shuffle } from '@deepakvishwakarma/ts-util';

export function generateDeck(): (consonant|vowel)[] {
    let deck = [...consonants, ...vowels];
    return shuffle(deck);    
}