/**
 * @name URCL_Highlighting
 * @author funnsam
 * @description Highlight.js custom language
 * @version 0.1.0
 */

// BIG TODO!

module.exports = class URCL_Highlighting {
    start() {
        // BdApi.showToast(monaco.languages.getLanguages());

        monaco.languages.register({
            id: "urcl",
            extensions: [".urcl"],
            aliases: ["urcl"]
        });
        monaco.languages.setMonarchTokensProvider("urcl", get_urcl());
    } 

    stop() {}
}

function get_urcl(hljs) {
    const KEYWORDS = [
        "add", "rsh", "lod", "str", "bge", "nor", "sub", "jmp", "mov", "nop", "imm", "lsh", "inc", "dec",
        "neg", "and", "or" , "not","xnor", "xor","nand", "brl", "brg", "bre", "bne", "bod", "bev", "ble",
        "brz", "bnz", "brn", "brp", "psh", "pop", "cal", "ret", "hlt", "cpy", "brc", "bnc", "mlt", "div",
        "mod", "bsr", "bsl", "srs", "bss", "out", "in" , "dw" ,
        "sete" , "setne", "setg" , "setl" , "setge", "setle", "setc" , "setnc", "llod" , "lstr" , "sdiv",
        "sbrl" , "sbrg" , "sble" , "ssetl", "ssetg", "ssetle"        , "ssetge"
    ];
    return {
        name: "URCL",
        case_insensitive: true,
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
                scope: "number",
                begin: "(\\+|\\-)?(0[xX][A-Fa-f0-9]+|0[bB][0-1]+|0[oO][0-7]+|[0-9]+)"
            },
            { scope: "meta"     , begin: "@[A-Za-z]+", end: "[\\s]"     },
            { scope: "built_in" , begin: "(\\$|\\#|r|m)[0-9]+"          },
            { scope: "symbol"   , begin: "\\.[^\\s]+"                   },
            { scope: "literal"  , begin: "%[A-Za-z0-9]+"                },
            {
                scope: "string",
                variants: [
                    {
                        begin: "\"", end: "\"", illegal: "\\n",
                        contains: [ hljs.BACKSLASH_ESCAPE ]
                    },
                    {
                        begin: "'", end: "'", illegal: "\\n",
                        contains: [ hljs.BACKSLASH_ESCAPE ]
                    }
                ],
            },
            {
                scope: 'keyword',
                begin: "(" + KEYWORDS.join("|") + ")"
            },
        ]
    }
}