



// Bubble sorting
(function (global) {

    const sort = function(arr) {

        let swapped;

        do {
            swapped = false;

            for (let i = 0; i < arr.length; i++) {

                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swapped = true;
                }

            }

        } while (swapped);

    }


    function bubbleSort() {

        let arr = [...this];

        sort(arr);

        this.length = 0;
        this.push(...arr);

    }


    global.Array.prototype.bubbleSort = bubbleSort;



}(window));
