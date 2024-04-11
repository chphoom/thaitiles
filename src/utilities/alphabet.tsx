enum tones {
    mid = "Middle",
    low = "Low",
    high = "High"
}

function isShort(val: boolean): string {
    return val ? "Short" : "Long"
}

export type Letter = {
    letter: string
    name: string | undefined
    pronounciation: string
    // audio: ???
    category: string
}

export const letters: Letter[] = [
    {
        letter: "ก",
        name: "ก ไก่",
        pronounciation: "Gaw Gài",
        category: tones.mid
    },
    {
        letter: "ข",
        name: "ข ไข่",
        pronounciation: "Kǎw Kài",
        category: tones.high
    },
    {
        letter: "ฃ",
        name: "ฃ ขวด",
        pronounciation: "Kǎw Kùad",
        category: tones.high
    },
    {
        letter: "ค",
        name: "ค ควาย",
        pronounciation: "Kaw Kwai",
        category: tones.low
    },
    {
        letter: "ฅ",
        name: "ฅ คน",
        pronounciation: "Kaw Kon",
        category: tones.low
    },
    {
        letter: "ฆ",
        name: "ฆ ระฆัง",
        pronounciation: "Kaw Rákang",
        category: tones.low
    },
    {
        letter: "ง",
        name: "ง งู",
        pronounciation: "Ngaw Ngoo",
        category: tones.low
    },
    {
        letter: "จ",
        name: "จ จาน",
        pronounciation: "Jaw Jahn",
        category: tones.mid
    },
    {
        letter: "ฉ",
        name: "ฉ ฉิ่ง",
        pronounciation: "Chaw Ching",
        category: tones.high
    },
    {
        letter: "ช",
        name: "ช ช้าง",
        pronounciation: "Chaw Cháng",
        category: tones.low
    },
    {
        letter: "ซ",
        name: "ซ โซ่",
        pronounciation: "Saw Sôh",
        category: tones.low
    },
    {
        letter: "ฌ",
        name: "ฌ เฌอ",
        pronounciation: "Chaw Cher",
        category: tones.mid
    },
    {
        letter: "ญ",
        name: "ญ หญิง",
        pronounciation: "Yaw Yǐng",
        category: tones.low
    },
    {
        letter: "ฎ",
        name: "ฎ ชฎา",
        pronounciation: "Daw Cháda",
        category: tones.mid
    },
    {
        letter: "ฏ",
        name: "ฏ ปฏัก",
        pronounciation: "Taw Pàtàk",
        category: tones.mid
    },
    {
        letter: "ฐ",
        name: "ฐ ฐาน",
        pronounciation: "Tǎw Tǎan",
        category: tones.high
    },
    {
        letter: "ฑ",
        name: "ฑ มณโฑ",
        pronounciation: "Taw Montoh",
        category: tones.low
    },
    {
        letter: "ฒ",
        name: "ฒ ผู้เผู้ฒ่า",
        pronounciation: "Taw Pûtâo",
        category: tones.low
    },
    {
        letter: "ณ",
        name: "ณ เณร",
        pronounciation: "Naw Nane",
        category: tones.low
    },
    {
        letter: "ด",
        name: "ด เด็ก",
        pronounciation: "Daw Dèk",
        category: tones.mid
    },
    {
        letter: "ต",
        name: "ต เต่า",
        pronounciation: "Taw Táo",
        category: tones.mid
    },
    {
        letter: "ถ",
        name: "ถ ถุง",
        pronounciation: "Tǎw Tǒong",
        category: tones.high
    },
    {
        letter: "ท",
        name: "ท ทหาร",
        pronounciation: "Taw Táhan",
        category: tones.low
    },
    {
        letter: "ธ",
        name: "ธ ธง",
        pronounciation: "Taw Tong",
        category: tones.low
    },
    {
        letter: "น",
        name: "น หนู",
        pronounciation: "Naw Nǒo",
        category: tones.low
    },
    {
        letter: "บ",
        name: "บ ใบไม้",
        pronounciation: "Baw Baii-mái",
        category: tones.mid
    },
    {
        letter: "ป",
        name: "ป ปลา",
        pronounciation: "Baw Bla",
        category: tones.mid
    },
    {
        letter: "ผ",
        name: "ผ ผึ้ง",
        pronounciation: "Pǎw Pêung",
        category: tones.high
    },
    {
        letter: "ฝ",
        name: "ฝ ฝา",
        pronounciation: "Fǎw Fǎh",
        category: tones.high
    },
    {
        letter: "พ",
        name: "พ พาน",
        pronounciation: "Paw Paan",
        category: tones.low
    },
    {
        letter: "ฟ",
        name: "ฟ ฟัน",
        pronounciation: "Faw Fun",
        category: tones.low
    },
    {
        letter: "ภ",
        name: "ภ ภูเบศ",
        pronounciation: "Paw Sǔmpao",
        category: tones.low
    },
    {
        letter: "ม",
        name: "ม ม้า",
        pronounciation: "Maw Máh",
        category: tones.low
    },
    {
        letter: "ย",
        name: "ย ยักษ์",
        pronounciation: "Yaw Yák",
        category: tones.low
    },
    {
        letter: "ร",
        name: "ร เรือ",
        pronounciation: "Raw Rua",
        category: tones.low
    },
    {
        letter: "ล",
        name: "ล ลิง",
        pronounciation: "Law Ling",
        category: tones.low
    },
    {
        letter: "ว",
        name: "ว แหวน",
        pronounciation: "Wor Wǎen",
        category: tones.low
    },
    {
        letter: "ศ",
        name: "ศ ศาลา",
        pronounciation: "Sǎw Sǎla",
        category: tones.high
    },
    {
        letter: "ษ",
        name: "ษ ฤๅษี",
        pronounciation: "Sǎw Rúe-sěe",
        category: tones.high
    },
    {
        letter: "ส",
        name: "ส เสือ",
        pronounciation: "Saw Sǔa",
        category: tones.high
    },
    {
        letter: "ห",
        name: "ห หีบ",
        pronounciation: "Hǎw Hèeb",
        category: tones.high
    },
    {
        letter: "ฬ",
        name: "ฬ จุฬา",
        pronounciation: "Law Chùla",
        category: tones.low
    },
    {
        letter: "อ",
        name: "อ อ่าง",
        pronounciation: "Aw Àhng",
        category: tones.mid
    },
    {
        letter: "ฮ",
        name: "ฮ นกฮูก",
        pronounciation: "Haw Nók-hôog",
        category: tones.low
    },
    {
        letter: "-ะ",
        pronounciation: "Ah",
        category: isShort(true)
    },
    {
        letter: "-า",
        pronounciation: "Ah",
        category: isShort(false)
    },
    {
        letter: "-ิ",
        pronounciation: "Ee",
        category: isShort(true)
    },
    {
        letter: "-ี",
        pronounciation: "Ee",
        category: isShort(false)
    },
    {
        letter: "-ึ",
        pronounciation: "Ue",
        category: isShort(true)
    },
    {
        letter: "-ื",
        pronounciation: "Ue",
        category: isShort(false)
    },
    {
        letter: "-ุ",
        pronounciation: "Oo",
        category: isShort(true)
    },
    {
        letter: "-ู",
        pronounciation: "Oo",
        category: isShort(false)
    },
    {
        letter: "เ-ะ",
        pronounciation: "Eh",
        category: isShort(true)
    },
    {
        letter: "เ",
        pronounciation: "Eh",
        category: isShort(false)
    },
    {
        letter: "แ-ะ",
        pronounciation: "Ae",
        category: isShort(true)
    },
    {
        letter: "แ-",
        pronounciation: "Ae",
        category: isShort(false)
    },
    {
        letter: "โ-ะ",
        pronounciation: "Oh",
        category: isShort(true)
    },
    {
        letter: "โ-",
        pronounciation: "Oh",
        category: isShort(false)
    },
    {
        letter: "เ-าะ",
        pronounciation: "Aw",
        category: isShort(true)
    },
    {
        letter: "-อ",
        pronounciation: "Aw",
        category: isShort(false)
    },
    {
        letter: "เ-ียะ",
        pronounciation: "Ia",
        category: isShort(true)
    },
    {
        letter: "เ-ีย",
        pronounciation: "Ia",
        category: isShort(false)
    },
    {
        letter: "เ-อะ",
        pronounciation: "Er",
        category: isShort(true)
    },
    {
        letter: "เ-อ",
        pronounciation: "Er",
        category: isShort(false)
    },
    {
        letter: "เ-ือะ",
        pronounciation: "Uea",
        category: isShort(true)
    },
    {
        letter: "เ-ือ",
        pronounciation: "Uea",
        category: isShort(false)
    },
    {
        letter: "-ัวะ",
        pronounciation: "Ua",
        category: isShort(true)
    },
    {
        letter: "-ัว",
        pronounciation: "Ua",
        category: isShort(false)
    },
    {
        letter: "ฤ",
        pronounciation: "Rue",
        category: isShort(true)
    },
    {
        letter: "ฤๅ",
        pronounciation: "Rue",
        category: isShort(false)
    },
    {
        letter: "ฦ",
        pronounciation: "Lue",
        category: isShort(true)
    },
    {
        letter: "ฦๅ",
        pronounciation: "Lue",
        category: isShort(false)
    },
    {
        letter: "-ำ",
        pronounciation: "Um",
        category: isShort(true)
    },
    {
        letter: "ไ-",
        pronounciation: "Ai",
        category: isShort(true)
    },
    {
        letter: "ใ-",
        pronounciation: "Ai",
        category: isShort(true)
    },
    {
        letter: "เ-า",
        pronounciation: "Ao",
        category: isShort(true)
    }
].map(letter => ({ ...letter, name: letter.name }));
// ].map(letter => ({ ...letter, name: letter.name ? letter.name : undefined}));

export function isConsonant(letter: Letter): boolean {
    return letter.name !== undefined;
}//end isConsonant

export function colorCode(letter: Letter, options: "border" | "background" | "hex") {
    switch(letter.category) {
        case tones.mid:
            return options === "border" ? "border-tileBlue" : options === "background" ? "bg-tileBlue" : "#2b4ba8";
        case tones.low:
            return options === "border" ? "border-tileYellow" : options === "background" ? "bg-tileYellow" : "#ffc700";
        case tones.high:
            return options === "border" ? "border-tileRed" : options === "background" ? "bg-tileRed" : "#c63b39";
        case isShort(true):
            return options === "border" ? "border-tileGreen" : options === "background" ? "bg-tileGreen" : "#1fb248";
        case isShort(false):
            return options === "border" ? "border-tilePurple" : options === "background" ? "bg-tilePurple" : "#801fa3";
    }
}//end colorCode