# Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

## svolgimento

- creo un for che svolga in automatico il ciclo di istruzione per 100 volte
- le istruzioni nel ciclo si preoccuperanno di inserire nel DOM una elemento html che rappresenti quante volte sono state ripetute le istruzioni
- aggiungo un if per stabilire tramite modulo che a multipli di "3" andrà invece inserito un elemento html che rappresenti la parola "fizz"
- aggiungo un else if per stabilire tramite modulo che a multipli di "5" andrà invece inserito un elemento html che rappresenti la parola "fizz"
- aggiungo un else per stabilire tramite modulo che ogni volta in cui l'istruzione sarà stata ripetuta per un numero di volte uguale ad un multiplo sia di 3 che di 5 dovrà inserire un elemento html "FizzBuzz"

- formattazione grafica dei div.classe così creati, differenziando le 4 casistiche che verranno a crearsi tramite css
