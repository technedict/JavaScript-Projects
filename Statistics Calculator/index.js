document.getElementById('calculate').addEventListener('click', function () {
    var list = document.getElementById('main-input').value;
    list = list.replaceAll(' ', '');
    list = list.split(',');

    list = list.map((item, index) => {
        return parseInt(item);
    })

    var operator = document.getElementById('operator').value;
    
    switch (operator) { 
        case 'sum':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum;
            break;

        case 'average':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum / list.length;
            break;

        case 'min':
            var min = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                min = list[i];
                }
            }
            document.getElementById('output').innerHTML = min;
            break;

        case 'max':
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] > max) {
                max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max;
            break;

        case 'median':
            // sort list
            for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < list.length; j++) {
                if (list[i] < list[j]) {
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                }
            }
            }
            // get median
            var median = 0;
            if (list.length % 2 == 0) {
            median = (list[list.length / 2] + list[(list.length / 2) - 1]) / 2;
            } else {
            median = list[Math.floor(list.length / 2)];
            }
            document.getElementById('output').innerHTML = median;
            break;

        case 'mode':
            //get mode
            if (list.length === 0) {
                return null; 
            };
            
            const modeMap = {}; 
            let maxCount = 0; 
            
            for (const element of list) {
                if (modeMap[element] === undefined) {
                    modeMap[element] = 1;
                } else {
                    modeMap[element]++;
                };
            
                if (modeMap[element] > maxCount) {
                    maxCount = modeMap[element];
                };
            };
            
            const modes = [];
            for (const key in modeMap) {
                if (modeMap[key] === maxCount) {
                    modes.push(key);
                };
            };
            
            const mode =  modes.length === 1 ? modes[0] : modes;
            document.getElementById('output').innerHTML = mode;
            break;
            
        case 'range':
            var min = list[0];
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                min = list[i];
                }
                if (list[i] > max) {
                max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max - min;
            break;

        default:
            document.getElementById('output').innerHTML = 'Invalid operator';
            break
    }
});

