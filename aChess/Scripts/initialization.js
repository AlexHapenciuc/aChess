
function initialize(value, timestamp){
  var i;
  for(i=1; i<=48; i++)
    tableArr[i] = 0;

  for(i=9; i<=16; i++)
    tableArr[i] = i-8;								//PAWNS
  tableArr[1] = 11; tableArr[8] = 12; //ROOKS
  tableArr[2] = 21; tableArr[7] = 22;	//KNIGHTS
  tableArr[3] = 31; tableArr[6] = 32; //BISHOPS
  tableArr[4] = 41; tableArr[5] = 42; //KING AND QUEEN

  for(i=49; i<=56; i++)
    tableArr[i] = i+2;                  //PAWNS
  tableArr[57] = 61; tableArr[64] = 62; //ROOKS
  tableArr[58] = 71; tableArr[63] = 72; //KNIGHTS
  tableArr[59] = 81; tableArr[62] = 82; //BISHOPS
  tableArr[60] = 91; tableArr[61] = 92; //KING AND QUEEN

  for(i=1;i<=64;i++)
    print("a[" + i + "] = " + tableArr[i] );
}
