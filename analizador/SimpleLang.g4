grammar SimpleLang;


prog
    : pedido+ EOF
    ;


pedido
    : PEDIDO_KEYWORD id ABRE_LLAVE item* CIERRA_LLAVE    #pedidoStmt
    ;


item
    : producto DOS_PUNTOS cantidad DOS_PUNTOS precio PUNTO_Y_COMA    #itemStmt
    ;


producto
    : id
    ;

cantidad
    : numero
    ;

precio
    : numero
    ;


id
    : ID_TOKEN
    ;

numero
    : NUMERO_TOKEN
    ;

PEDIDO_KEYWORD : 'pedido' ;
ABRE_LLAVE     : '{' ;
CIERRA_LLAVE    : '}' ;
DOS_PUNTOS     : ':' ;
PUNTO_Y_COMA   : ';' ;

ID_TOKEN       : [a-zA-Z]+ ;
NUMERO_TOKEN   : [0-9]+ ;

WS             : [ \t\r\n]+ -> skip ;