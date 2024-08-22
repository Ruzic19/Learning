function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col +1)* (nRows - row) ;

}


// pomnozimo koliko ima sjedala da pomnozimo nCols i nRows, ali se mi nalazimo na mjestu col i row, pa oduzmemo od nCols i nRows nas col i row.
// na kraju dodamo jos 1 za columne jer ne zelimo odsjec col u kojem se nalazimo, dok row ostaje isti jer gledamo redove od iza nas , a ne od naseg reda.