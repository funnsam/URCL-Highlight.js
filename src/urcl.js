/*
Language: URCL
Author: funnsam
Description: URCL Highlighting
*/

hljs.registerLanguage("urcl", function() {
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
            { scope: "number"   , begin: "0x[0-9abcdef]+"               },
            { scope: "number"   , begin: "0b[01]+"                      },
            { scope: "number"   , begin: "0o[0234567]+"                 },
            { scope: "number"   , begin: "[0-9]+"                       },
            { scope: "comment"  , begin: "//"           , end: "\n"     },
            { scope: "meta"     , begin: "@[A-Za-z]+"   , end: "[\\s]"  },
            { scope: "built_in" , begin: "(\\$|\\#|r|m)[0-9]+"          },
            { scope: "symbol"   , begin: "\\.[A-Za-z0-9]+"              },
            { scope: "literal"  , begin: "%[A-Za-z0-9]+"                },
            { scope: "string"   , begin: "('|\")"       , end: "('|\")" , illegal: "\\n", contains: [ hljs.BACKSLASH_ESCAPE ] },
            {
                className: 'keyword',
                begin: "(" + KEYWORDS.join("|") + ")(?=\\s)"
            },
        ]
    }
});
console.log(hljs.listLanguages());
