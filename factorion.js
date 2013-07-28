function Factorion() {
    /*
    * Кэшируем значение факториалов цифр
    */
    if (!Factorion.digitFactorialCache) {
        Factorion.digitFactorialCache = [1];
        for(var i = 1; i < 10; i++) {
            Factorion.digitFactorialCache[i] = Factorion.digitFactorialCache[i - 1] * i;
        }
    }

    /*
    * Метод возвращает сумму факториалов цифр переданного числа
    */
    this.getDigitFactorialSum = function (number) {
        var mod = number;
        var digit;
        var result = 0;

        while(parseInt(mod / 10) != 0) {
            digit = mod % 10;
            result += Factorion.digitFactorialCache[digit];
            mod = parseInt(mod / 10);
        }
        result += Factorion.digitFactorialCache[mod];

        return result;
    }

    /*
     * Метод считает и возвращает факторионы
     */
    this.getFactorions = function () {
        this._factorions = [];

        var start = new Date().getTime();

        /*
        * Факторион n должен удовлетворять неравенству 10 ^ (d - 1) <= n <= 9! * d, где d — количество цифр числа n.
        * При d >= 8 неравенство уже не выполняется, также функция 10^x возрастает быстрее, чем 9!*x, поэтому рассматривать случай d >= 8 не имеет смысла.
        * При d = 7 верхняя граница числа будет равна 9! * 7 = 2903040, ее и будем использовать при поиске.
        */
        for (var num = 1; num < Factorion.digitFactorialCache[9] * 7; num++) {
            if (num == this.getDigitFactorialSum(num)) {
                this._factorions.push(num);
            }
        }

        var end = new Date().getTime();
        this._calculationTime = end - start;

        return this._factorions;
    }

    this.getCalculationTime = function () {
        return this._calculationTime ? this._calculationTime : 'undefined';
    }
}
