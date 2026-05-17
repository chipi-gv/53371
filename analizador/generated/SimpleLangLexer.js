// Generated from SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,49,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,
1,3,1,3,1,4,1,4,1,5,4,5,34,8,5,11,5,12,5,35,1,6,4,6,39,8,6,11,6,12,6,40,
1,7,4,7,44,8,7,11,7,12,7,45,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
15,8,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,51,0,1,1,0,0,
0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,24,1,0,0,0,5,26,1,0,0,0,7,28,1,0,0,0,9,30,
1,0,0,0,11,33,1,0,0,0,13,38,1,0,0,0,15,43,1,0,0,0,17,18,5,112,0,0,18,19,
5,101,0,0,19,20,5,100,0,0,20,21,5,105,0,0,21,22,5,100,0,0,22,23,5,111,0,
0,23,2,1,0,0,0,24,25,5,123,0,0,25,4,1,0,0,0,26,27,5,125,0,0,27,6,1,0,0,0,
28,29,5,58,0,0,29,8,1,0,0,0,30,31,5,59,0,0,31,10,1,0,0,0,32,34,7,0,0,0,33,
32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,12,1,0,0,0,37,39,
7,1,0,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,14,1,
0,0,0,42,44,7,2,0,0,43,42,1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,
0,0,46,47,1,0,0,0,47,48,6,7,0,0,48,16,1,0,0,0,4,0,35,40,45,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SimpleLangLexer extends antlr4.Lexer {

    static grammarFileName = "SimpleLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'pedido'", "'{'", "'}'", "':'", "';'" ];
	static symbolicNames = [ null, "PEDIDO_KEYWORD", "ABRE_LLAVE", "CIERRA_LLAVE", 
                          "DOS_PUNTOS", "PUNTO_Y_COMA", "ID_TOKEN", "NUMERO_TOKEN", 
                          "WS" ];
	static ruleNames = [ "PEDIDO_KEYWORD", "ABRE_LLAVE", "CIERRA_LLAVE", "DOS_PUNTOS", 
                      "PUNTO_Y_COMA", "ID_TOKEN", "NUMERO_TOKEN", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

SimpleLangLexer.EOF = antlr4.Token.EOF;
SimpleLangLexer.PEDIDO_KEYWORD = 1;
SimpleLangLexer.ABRE_LLAVE = 2;
SimpleLangLexer.CIERRA_LLAVE = 3;
SimpleLangLexer.DOS_PUNTOS = 4;
SimpleLangLexer.PUNTO_Y_COMA = 5;
SimpleLangLexer.ID_TOKEN = 6;
SimpleLangLexer.NUMERO_TOKEN = 7;
SimpleLangLexer.WS = 8;



