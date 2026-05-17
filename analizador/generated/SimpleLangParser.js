// Generated from SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';

const serializedATN = [4,1,8,52,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,
1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,45,
0,17,1,0,0,0,2,23,1,0,0,0,4,34,1,0,0,0,6,41,1,0,0,0,8,43,1,0,0,0,10,45,1,
0,0,0,12,47,1,0,0,0,14,49,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,
0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,
23,24,5,1,0,0,24,25,3,12,6,0,25,29,5,2,0,0,26,28,3,4,2,0,27,26,1,0,0,0,28,
31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,
5,3,0,0,33,3,1,0,0,0,34,35,3,6,3,0,35,36,5,4,0,0,36,37,3,8,4,0,37,38,5,4,
0,0,38,39,3,10,5,0,39,40,5,5,0,0,40,5,1,0,0,0,41,42,3,12,6,0,42,7,1,0,0,
0,43,44,3,14,7,0,44,9,1,0,0,0,45,46,3,14,7,0,46,11,1,0,0,0,47,48,5,6,0,0,
48,13,1,0,0,0,49,50,5,7,0,0,50,15,1,0,0,0,2,19,29];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'pedido'", "'{'", "'}'", "':'", "';'" ];
    static symbolicNames = [ null, "PEDIDO_KEYWORD", "ABRE_LLAVE", "CIERRA_LLAVE", 
                             "DOS_PUNTOS", "PUNTO_Y_COMA", "ID_TOKEN", "NUMERO_TOKEN", 
                             "WS" ];
    static ruleNames = [ "prog", "pedido", "item", "producto", "cantidad", 
                         "precio", "id", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.pedido();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 21;
	        this.match(SimpleLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pedido() {
	    let localctx = new PedidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_pedido);
	    var _la = 0;
	    try {
	        localctx = new PedidoStmtContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(SimpleLangParser.PEDIDO_KEYWORD);
	        this.state = 24;
	        this.id();
	        this.state = 25;
	        this.match(SimpleLangParser.ABRE_LLAVE);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 26;
	            this.item();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(SimpleLangParser.CIERRA_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_item);
	    try {
	        localctx = new ItemStmtContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.producto();
	        this.state = 35;
	        this.match(SimpleLangParser.DOS_PUNTOS);
	        this.state = 36;
	        this.cantidad();
	        this.state = 37;
	        this.match(SimpleLangParser.DOS_PUNTOS);
	        this.state = 38;
	        this.precio();
	        this.state = 39;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	producto() {
	    let localctx = new ProductoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_producto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.id();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cantidad() {
	    let localctx = new CantidadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_cantidad);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	precio() {
	    let localctx = new PrecioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_precio);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(SimpleLangParser.ID_TOKEN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(SimpleLangParser.NUMERO_TOKEN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.PEDIDO_KEYWORD = 1;
SimpleLangParser.ABRE_LLAVE = 2;
SimpleLangParser.CIERRA_LLAVE = 3;
SimpleLangParser.DOS_PUNTOS = 4;
SimpleLangParser.PUNTO_Y_COMA = 5;
SimpleLangParser.ID_TOKEN = 6;
SimpleLangParser.NUMERO_TOKEN = 7;
SimpleLangParser.WS = 8;

SimpleLangParser.RULE_prog = 0;
SimpleLangParser.RULE_pedido = 1;
SimpleLangParser.RULE_item = 2;
SimpleLangParser.RULE_producto = 3;
SimpleLangParser.RULE_cantidad = 4;
SimpleLangParser.RULE_precio = 5;
SimpleLangParser.RULE_id = 6;
SimpleLangParser.RULE_numero = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(SimpleLangParser.EOF, 0);
	};

	pedido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PedidoContext);
	    } else {
	        return this.getTypedRuleContext(PedidoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PedidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_pedido;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PedidoStmtContext extends PedidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PEDIDO_KEYWORD() {
	    return this.getToken(SimpleLangParser.PEDIDO_KEYWORD, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	ABRE_LLAVE() {
	    return this.getToken(SimpleLangParser.ABRE_LLAVE, 0);
	};

	CIERRA_LLAVE() {
	    return this.getToken(SimpleLangParser.CIERRA_LLAVE, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPedidoStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPedidoStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitPedidoStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.PedidoStmtContext = PedidoStmtContext;

class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_item;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ItemStmtContext extends ItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	producto() {
	    return this.getTypedRuleContext(ProductoContext,0);
	};

	DOS_PUNTOS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.DOS_PUNTOS);
	    } else {
	        return this.getToken(SimpleLangParser.DOS_PUNTOS, i);
	    }
	};


	cantidad() {
	    return this.getTypedRuleContext(CantidadContext,0);
	};

	precio() {
	    return this.getTypedRuleContext(PrecioContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterItemStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitItemStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitItemStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.ItemStmtContext = ItemStmtContext;

class ProductoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_producto;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterProducto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitProducto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitProducto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CantidadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_cantidad;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCantidad(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCantidad(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitCantidad(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrecioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_precio;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPrecio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPrecio(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitPrecio(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_id;
    }

	ID_TOKEN() {
	    return this.getToken(SimpleLangParser.ID_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_numero;
    }

	NUMERO_TOKEN() {
	    return this.getToken(SimpleLangParser.NUMERO_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleLangParser.ProgContext = ProgContext; 
SimpleLangParser.PedidoContext = PedidoContext; 
SimpleLangParser.ItemContext = ItemContext; 
SimpleLangParser.ProductoContext = ProductoContext; 
SimpleLangParser.CantidadContext = CantidadContext; 
SimpleLangParser.PrecioContext = PrecioContext; 
SimpleLangParser.IdContext = IdContext; 
SimpleLangParser.NumeroContext = NumeroContext; 
