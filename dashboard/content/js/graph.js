/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 228.0, "minX": 0.0, "maxY": 1283.0, "series": [{"data": [[0.0, 228.0], [0.1, 228.0], [0.2, 228.0], [0.3, 228.0], [0.4, 228.0], [0.5, 228.0], [0.6, 228.0], [0.7, 229.0], [0.8, 229.0], [0.9, 229.0], [1.0, 233.0], [1.1, 233.0], [1.2, 233.0], [1.3, 233.0], [1.4, 235.0], [1.5, 235.0], [1.6, 235.0], [1.7, 236.0], [1.8, 236.0], [1.9, 236.0], [2.0, 241.0], [2.1, 241.0], [2.2, 241.0], [2.3, 241.0], [2.4, 241.0], [2.5, 241.0], [2.6, 241.0], [2.7, 241.0], [2.8, 241.0], [2.9, 241.0], [3.0, 244.0], [3.1, 244.0], [3.2, 244.0], [3.3, 244.0], [3.4, 246.0], [3.5, 246.0], [3.6, 246.0], [3.7, 246.0], [3.8, 246.0], [3.9, 246.0], [4.0, 246.0], [4.1, 246.0], [4.2, 246.0], [4.3, 246.0], [4.4, 247.0], [4.5, 247.0], [4.6, 247.0], [4.7, 248.0], [4.8, 248.0], [4.9, 248.0], [5.0, 252.0], [5.1, 252.0], [5.2, 252.0], [5.3, 252.0], [5.4, 257.0], [5.5, 257.0], [5.6, 257.0], [5.7, 258.0], [5.8, 258.0], [5.9, 258.0], [6.0, 259.0], [6.1, 259.0], [6.2, 259.0], [6.3, 259.0], [6.4, 260.0], [6.5, 260.0], [6.6, 260.0], [6.7, 260.0], [6.8, 260.0], [6.9, 260.0], [7.0, 261.0], [7.1, 261.0], [7.2, 261.0], [7.3, 261.0], [7.4, 261.0], [7.5, 261.0], [7.6, 261.0], [7.7, 262.0], [7.8, 262.0], [7.9, 262.0], [8.0, 266.0], [8.1, 266.0], [8.2, 266.0], [8.3, 266.0], [8.4, 266.0], [8.5, 266.0], [8.6, 266.0], [8.7, 266.0], [8.8, 266.0], [8.9, 266.0], [9.0, 267.0], [9.1, 267.0], [9.2, 267.0], [9.3, 267.0], [9.4, 273.0], [9.5, 273.0], [9.6, 273.0], [9.7, 274.0], [9.8, 274.0], [9.9, 274.0], [10.0, 274.0], [10.1, 274.0], [10.2, 274.0], [10.3, 274.0], [10.4, 277.0], [10.5, 277.0], [10.6, 277.0], [10.7, 279.0], [10.8, 279.0], [10.9, 279.0], [11.0, 279.0], [11.1, 291.0], [11.2, 291.0], [11.3, 291.0], [11.4, 295.0], [11.5, 295.0], [11.6, 295.0], [11.7, 297.0], [11.8, 297.0], [11.9, 297.0], [12.0, 297.0], [12.1, 297.0], [12.2, 297.0], [12.3, 297.0], [12.4, 297.0], [12.5, 297.0], [12.6, 297.0], [12.7, 298.0], [12.8, 298.0], [12.9, 298.0], [13.0, 298.0], [13.1, 298.0], [13.2, 298.0], [13.3, 298.0], [13.4, 299.0], [13.5, 299.0], [13.6, 299.0], [13.7, 299.0], [13.8, 299.0], [13.9, 299.0], [14.0, 299.0], [14.1, 301.0], [14.2, 301.0], [14.3, 301.0], [14.4, 301.0], [14.5, 301.0], [14.6, 301.0], [14.7, 301.0], [14.8, 301.0], [14.9, 301.0], [15.0, 301.0], [15.1, 301.0], [15.2, 301.0], [15.3, 301.0], [15.4, 301.0], [15.5, 301.0], [15.6, 301.0], [15.7, 302.0], [15.8, 302.0], [15.9, 302.0], [16.0, 303.0], [16.1, 303.0], [16.2, 303.0], [16.3, 303.0], [16.4, 303.0], [16.5, 303.0], [16.6, 303.0], [16.7, 303.0], [16.8, 303.0], [16.9, 303.0], [17.0, 306.0], [17.1, 306.0], [17.2, 306.0], [17.3, 306.0], [17.4, 306.0], [17.5, 306.0], [17.6, 306.0], [17.7, 307.0], [17.8, 307.0], [17.9, 307.0], [18.0, 308.0], [18.1, 308.0], [18.2, 308.0], [18.3, 308.0], [18.4, 308.0], [18.5, 308.0], [18.6, 308.0], [18.7, 308.0], [18.8, 308.0], [18.9, 308.0], [19.0, 311.0], [19.1, 311.0], [19.2, 311.0], [19.3, 311.0], [19.4, 311.0], [19.5, 311.0], [19.6, 311.0], [19.7, 313.0], [19.8, 313.0], [19.9, 313.0], [20.0, 314.0], [20.1, 314.0], [20.2, 314.0], [20.3, 314.0], [20.4, 314.0], [20.5, 314.0], [20.6, 314.0], [20.7, 314.0], [20.8, 314.0], [20.9, 314.0], [21.0, 314.0], [21.1, 314.0], [21.2, 314.0], [21.3, 314.0], [21.4, 314.0], [21.5, 314.0], [21.6, 314.0], [21.7, 314.0], [21.8, 314.0], [21.9, 314.0], [22.0, 314.0], [22.1, 314.0], [22.2, 314.0], [22.3, 314.0], [22.4, 315.0], [22.5, 315.0], [22.6, 315.0], [22.7, 315.0], [22.8, 315.0], [22.9, 315.0], [23.0, 316.0], [23.1, 316.0], [23.2, 316.0], [23.3, 316.0], [23.4, 316.0], [23.5, 316.0], [23.6, 316.0], [23.7, 316.0], [23.8, 316.0], [23.9, 316.0], [24.0, 318.0], [24.1, 318.0], [24.2, 318.0], [24.3, 318.0], [24.4, 318.0], [24.5, 318.0], [24.6, 318.0], [24.7, 318.0], [24.8, 318.0], [24.9, 318.0], [25.0, 319.0], [25.1, 319.0], [25.2, 319.0], [25.3, 319.0], [25.4, 319.0], [25.5, 319.0], [25.6, 319.0], [25.7, 320.0], [25.8, 320.0], [25.9, 320.0], [26.0, 323.0], [26.1, 323.0], [26.2, 323.0], [26.3, 323.0], [26.4, 324.0], [26.5, 324.0], [26.6, 324.0], [26.7, 324.0], [26.8, 324.0], [26.9, 324.0], [27.0, 325.0], [27.1, 325.0], [27.2, 325.0], [27.3, 325.0], [27.4, 328.0], [27.5, 328.0], [27.6, 328.0], [27.7, 330.0], [27.8, 330.0], [27.9, 330.0], [28.0, 332.0], [28.1, 332.0], [28.2, 332.0], [28.3, 332.0], [28.4, 336.0], [28.5, 336.0], [28.6, 336.0], [28.7, 336.0], [28.8, 336.0], [28.9, 336.0], [29.0, 340.0], [29.1, 340.0], [29.2, 340.0], [29.3, 340.0], [29.4, 342.0], [29.5, 342.0], [29.6, 342.0], [29.7, 342.0], [29.8, 342.0], [29.9, 342.0], [30.0, 342.0], [30.1, 342.0], [30.2, 342.0], [30.3, 342.0], [30.4, 348.0], [30.5, 348.0], [30.6, 348.0], [30.7, 348.0], [30.8, 348.0], [30.9, 348.0], [31.0, 351.0], [31.1, 351.0], [31.2, 351.0], [31.3, 351.0], [31.4, 355.0], [31.5, 355.0], [31.6, 355.0], [31.7, 355.0], [31.8, 355.0], [31.9, 355.0], [32.0, 356.0], [32.1, 356.0], [32.2, 356.0], [32.3, 356.0], [32.4, 357.0], [32.5, 357.0], [32.6, 357.0], [32.7, 363.0], [32.8, 363.0], [32.9, 363.0], [33.0, 365.0], [33.1, 365.0], [33.2, 365.0], [33.3, 365.0], [33.4, 372.0], [33.5, 372.0], [33.6, 372.0], [33.7, 372.0], [33.8, 372.0], [33.9, 372.0], [34.0, 372.0], [34.1, 372.0], [34.2, 372.0], [34.3, 372.0], [34.4, 378.0], [34.5, 378.0], [34.6, 378.0], [34.7, 382.0], [34.8, 382.0], [34.9, 382.0], [35.0, 382.0], [35.1, 382.0], [35.2, 382.0], [35.3, 382.0], [35.4, 383.0], [35.5, 383.0], [35.6, 383.0], [35.7, 387.0], [35.8, 387.0], [35.9, 387.0], [36.0, 387.0], [36.1, 391.0], [36.2, 391.0], [36.3, 391.0], [36.4, 391.0], [36.5, 391.0], [36.6, 391.0], [36.7, 396.0], [36.8, 396.0], [36.9, 396.0], [37.0, 396.0], [37.1, 396.0], [37.2, 396.0], [37.3, 396.0], [37.4, 398.0], [37.5, 398.0], [37.6, 398.0], [37.7, 400.0], [37.8, 400.0], [37.9, 400.0], [38.0, 400.0], [38.1, 401.0], [38.2, 401.0], [38.3, 401.0], [38.4, 403.0], [38.5, 403.0], [38.6, 403.0], [38.7, 403.0], [38.8, 403.0], [38.9, 403.0], [39.0, 403.0], [39.1, 404.0], [39.2, 404.0], [39.3, 404.0], [39.4, 406.0], [39.5, 406.0], [39.6, 406.0], [39.7, 407.0], [39.8, 407.0], [39.9, 407.0], [40.0, 407.0], [40.1, 408.0], [40.2, 408.0], [40.3, 408.0], [40.4, 409.0], [40.5, 409.0], [40.6, 409.0], [40.7, 409.0], [40.8, 409.0], [40.9, 409.0], [41.0, 409.0], [41.1, 409.0], [41.2, 409.0], [41.3, 409.0], [41.4, 413.0], [41.5, 413.0], [41.6, 413.0], [41.7, 414.0], [41.8, 414.0], [41.9, 414.0], [42.0, 414.0], [42.1, 416.0], [42.2, 416.0], [42.3, 416.0], [42.4, 417.0], [42.5, 417.0], [42.6, 417.0], [42.7, 417.0], [42.8, 417.0], [42.9, 417.0], [43.0, 417.0], [43.1, 421.0], [43.2, 421.0], [43.3, 421.0], [43.4, 423.0], [43.5, 423.0], [43.6, 423.0], [43.7, 424.0], [43.8, 424.0], [43.9, 424.0], [44.0, 424.0], [44.1, 426.0], [44.2, 426.0], [44.3, 426.0], [44.4, 428.0], [44.5, 428.0], [44.6, 428.0], [44.7, 432.0], [44.8, 432.0], [44.9, 432.0], [45.0, 432.0], [45.1, 432.0], [45.2, 432.0], [45.3, 432.0], [45.4, 434.0], [45.5, 434.0], [45.6, 434.0], [45.7, 441.0], [45.8, 441.0], [45.9, 441.0], [46.0, 441.0], [46.1, 442.0], [46.2, 442.0], [46.3, 442.0], [46.4, 442.0], [46.5, 442.0], [46.6, 442.0], [46.7, 443.0], [46.8, 443.0], [46.9, 443.0], [47.0, 443.0], [47.1, 443.0], [47.2, 443.0], [47.3, 443.0], [47.4, 444.0], [47.5, 444.0], [47.6, 444.0], [47.7, 447.0], [47.8, 447.0], [47.9, 447.0], [48.0, 447.0], [48.1, 447.0], [48.2, 447.0], [48.3, 447.0], [48.4, 447.0], [48.5, 447.0], [48.6, 447.0], [48.7, 448.0], [48.8, 448.0], [48.9, 448.0], [49.0, 448.0], [49.1, 449.0], [49.2, 449.0], [49.3, 449.0], [49.4, 450.0], [49.5, 450.0], [49.6, 450.0], [49.7, 452.0], [49.8, 452.0], [49.9, 452.0], [50.0, 452.0], [50.1, 453.0], [50.2, 453.0], [50.3, 453.0], [50.4, 453.0], [50.5, 453.0], [50.6, 453.0], [50.7, 453.0], [50.8, 453.0], [50.9, 453.0], [51.0, 453.0], [51.1, 454.0], [51.2, 454.0], [51.3, 454.0], [51.4, 455.0], [51.5, 455.0], [51.6, 455.0], [51.7, 455.0], [51.8, 455.0], [51.9, 455.0], [52.0, 455.0], [52.1, 458.0], [52.2, 458.0], [52.3, 458.0], [52.4, 460.0], [52.5, 460.0], [52.6, 460.0], [52.7, 462.0], [52.8, 462.0], [52.9, 462.0], [53.0, 462.0], [53.1, 462.0], [53.2, 462.0], [53.3, 462.0], [53.4, 463.0], [53.5, 463.0], [53.6, 463.0], [53.7, 465.0], [53.8, 465.0], [53.9, 465.0], [54.0, 465.0], [54.1, 465.0], [54.2, 465.0], [54.3, 465.0], [54.4, 465.0], [54.5, 465.0], [54.6, 465.0], [54.7, 466.0], [54.8, 466.0], [54.9, 466.0], [55.0, 466.0], [55.1, 467.0], [55.2, 467.0], [55.3, 467.0], [55.4, 470.0], [55.5, 470.0], [55.6, 470.0], [55.7, 472.0], [55.8, 472.0], [55.9, 472.0], [56.0, 472.0], [56.1, 473.0], [56.2, 473.0], [56.3, 473.0], [56.4, 474.0], [56.5, 474.0], [56.6, 474.0], [56.7, 475.0], [56.8, 475.0], [56.9, 475.0], [57.0, 475.0], [57.1, 476.0], [57.2, 476.0], [57.3, 476.0], [57.4, 478.0], [57.5, 478.0], [57.6, 478.0], [57.7, 478.0], [57.8, 478.0], [57.9, 478.0], [58.0, 478.0], [58.1, 479.0], [58.2, 479.0], [58.3, 479.0], [58.4, 479.0], [58.5, 479.0], [58.6, 479.0], [58.7, 479.0], [58.8, 479.0], [58.9, 479.0], [59.0, 479.0], [59.1, 480.0], [59.2, 480.0], [59.3, 480.0], [59.4, 481.0], [59.5, 481.0], [59.6, 481.0], [59.7, 483.0], [59.8, 483.0], [59.9, 483.0], [60.0, 483.0], [60.1, 485.0], [60.2, 485.0], [60.3, 485.0], [60.4, 485.0], [60.5, 485.0], [60.6, 485.0], [60.7, 485.0], [60.8, 485.0], [60.9, 485.0], [61.0, 485.0], [61.1, 487.0], [61.2, 487.0], [61.3, 487.0], [61.4, 489.0], [61.5, 489.0], [61.6, 489.0], [61.7, 489.0], [61.8, 489.0], [61.9, 489.0], [62.0, 489.0], [62.1, 490.0], [62.2, 490.0], [62.3, 490.0], [62.4, 492.0], [62.5, 492.0], [62.6, 492.0], [62.7, 492.0], [62.8, 492.0], [62.9, 492.0], [63.0, 492.0], [63.1, 495.0], [63.2, 495.0], [63.3, 495.0], [63.4, 495.0], [63.5, 495.0], [63.6, 495.0], [63.7, 496.0], [63.8, 496.0], [63.9, 496.0], [64.0, 496.0], [64.1, 496.0], [64.2, 496.0], [64.3, 496.0], [64.4, 496.0], [64.5, 496.0], [64.6, 496.0], [64.7, 497.0], [64.8, 497.0], [64.9, 497.0], [65.0, 497.0], [65.1, 499.0], [65.2, 499.0], [65.3, 499.0], [65.4, 499.0], [65.5, 499.0], [65.6, 499.0], [65.7, 500.0], [65.8, 500.0], [65.9, 500.0], [66.0, 500.0], [66.1, 500.0], [66.2, 500.0], [66.3, 500.0], [66.4, 501.0], [66.5, 501.0], [66.6, 501.0], [66.7, 502.0], [66.8, 502.0], [66.9, 502.0], [67.0, 502.0], [67.1, 504.0], [67.2, 504.0], [67.3, 504.0], [67.4, 506.0], [67.5, 506.0], [67.6, 506.0], [67.7, 511.0], [67.8, 511.0], [67.9, 511.0], [68.0, 511.0], [68.1, 512.0], [68.2, 512.0], [68.3, 512.0], [68.4, 518.0], [68.5, 518.0], [68.6, 518.0], [68.7, 518.0], [68.8, 518.0], [68.9, 518.0], [69.0, 518.0], [69.1, 520.0], [69.2, 520.0], [69.3, 520.0], [69.4, 521.0], [69.5, 521.0], [69.6, 521.0], [69.7, 524.0], [69.8, 524.0], [69.9, 524.0], [70.0, 524.0], [70.1, 525.0], [70.2, 525.0], [70.3, 525.0], [70.4, 530.0], [70.5, 530.0], [70.6, 530.0], [70.7, 530.0], [70.8, 530.0], [70.9, 530.0], [71.0, 530.0], [71.1, 530.0], [71.2, 530.0], [71.3, 530.0], [71.4, 533.0], [71.5, 533.0], [71.6, 533.0], [71.7, 533.0], [71.8, 533.0], [71.9, 533.0], [72.0, 533.0], [72.1, 534.0], [72.2, 534.0], [72.3, 534.0], [72.4, 535.0], [72.5, 535.0], [72.6, 535.0], [72.7, 536.0], [72.8, 536.0], [72.9, 536.0], [73.0, 536.0], [73.1, 536.0], [73.2, 536.0], [73.3, 536.0], [73.4, 538.0], [73.5, 538.0], [73.6, 538.0], [73.7, 546.0], [73.8, 546.0], [73.9, 546.0], [74.0, 546.0], [74.1, 546.0], [74.2, 546.0], [74.3, 546.0], [74.4, 548.0], [74.5, 548.0], [74.6, 548.0], [74.7, 550.0], [74.8, 550.0], [74.9, 550.0], [75.0, 550.0], [75.1, 551.0], [75.2, 551.0], [75.3, 551.0], [75.4, 553.0], [75.5, 553.0], [75.6, 553.0], [75.7, 555.0], [75.8, 555.0], [75.9, 555.0], [76.0, 555.0], [76.1, 555.0], [76.2, 555.0], [76.3, 555.0], [76.4, 560.0], [76.5, 560.0], [76.6, 560.0], [76.7, 567.0], [76.8, 567.0], [76.9, 567.0], [77.0, 567.0], [77.1, 567.0], [77.2, 567.0], [77.3, 567.0], [77.4, 568.0], [77.5, 568.0], [77.6, 568.0], [77.7, 568.0], [77.8, 568.0], [77.9, 568.0], [78.0, 568.0], [78.1, 576.0], [78.2, 576.0], [78.3, 576.0], [78.4, 577.0], [78.5, 577.0], [78.6, 577.0], [78.7, 581.0], [78.8, 581.0], [78.9, 581.0], [79.0, 581.0], [79.1, 581.0], [79.2, 581.0], [79.3, 581.0], [79.4, 598.0], [79.5, 598.0], [79.6, 598.0], [79.7, 602.0], [79.8, 602.0], [79.9, 602.0], [80.0, 602.0], [80.1, 606.0], [80.2, 606.0], [80.3, 606.0], [80.4, 607.0], [80.5, 607.0], [80.6, 607.0], [80.7, 611.0], [80.8, 611.0], [80.9, 611.0], [81.0, 622.0], [81.1, 622.0], [81.2, 622.0], [81.3, 622.0], [81.4, 629.0], [81.5, 629.0], [81.6, 629.0], [81.7, 629.0], [81.8, 629.0], [81.9, 629.0], [82.0, 633.0], [82.1, 633.0], [82.2, 633.0], [82.3, 633.0], [82.4, 633.0], [82.5, 633.0], [82.6, 633.0], [82.7, 640.0], [82.8, 640.0], [82.9, 640.0], [83.0, 644.0], [83.1, 644.0], [83.2, 644.0], [83.3, 644.0], [83.4, 645.0], [83.5, 645.0], [83.6, 645.0], [83.7, 647.0], [83.8, 647.0], [83.9, 647.0], [84.0, 648.0], [84.1, 648.0], [84.2, 648.0], [84.3, 648.0], [84.4, 650.0], [84.5, 650.0], [84.6, 650.0], [84.7, 653.0], [84.8, 653.0], [84.9, 653.0], [85.0, 654.0], [85.1, 654.0], [85.2, 654.0], [85.3, 654.0], [85.4, 656.0], [85.5, 656.0], [85.6, 656.0], [85.7, 658.0], [85.8, 658.0], [85.9, 658.0], [86.0, 658.0], [86.1, 658.0], [86.2, 658.0], [86.3, 658.0], [86.4, 659.0], [86.5, 659.0], [86.6, 659.0], [86.7, 661.0], [86.8, 661.0], [86.9, 661.0], [87.0, 661.0], [87.1, 661.0], [87.2, 661.0], [87.3, 661.0], [87.4, 663.0], [87.5, 663.0], [87.6, 663.0], [87.7, 671.0], [87.8, 671.0], [87.9, 671.0], [88.0, 672.0], [88.1, 672.0], [88.2, 672.0], [88.3, 672.0], [88.4, 677.0], [88.5, 677.0], [88.6, 677.0], [88.7, 678.0], [88.8, 678.0], [88.9, 678.0], [89.0, 680.0], [89.1, 680.0], [89.2, 680.0], [89.3, 680.0], [89.4, 682.0], [89.5, 682.0], [89.6, 682.0], [89.7, 683.0], [89.8, 683.0], [89.9, 683.0], [90.0, 685.0], [90.1, 685.0], [90.2, 685.0], [90.3, 685.0], [90.4, 686.0], [90.5, 686.0], [90.6, 686.0], [90.7, 692.0], [90.8, 692.0], [90.9, 692.0], [91.0, 692.0], [91.1, 692.0], [91.2, 692.0], [91.3, 692.0], [91.4, 694.0], [91.5, 694.0], [91.6, 694.0], [91.7, 695.0], [91.8, 695.0], [91.9, 695.0], [92.0, 697.0], [92.1, 697.0], [92.2, 697.0], [92.3, 697.0], [92.4, 699.0], [92.5, 699.0], [92.6, 699.0], [92.7, 705.0], [92.8, 705.0], [92.9, 705.0], [93.0, 721.0], [93.1, 721.0], [93.2, 721.0], [93.3, 721.0], [93.4, 722.0], [93.5, 722.0], [93.6, 722.0], [93.7, 732.0], [93.8, 732.0], [93.9, 732.0], [94.0, 735.0], [94.1, 735.0], [94.2, 735.0], [94.3, 735.0], [94.4, 741.0], [94.5, 741.0], [94.6, 741.0], [94.7, 1181.0], [94.8, 1181.0], [94.9, 1181.0], [95.0, 1217.0], [95.1, 1217.0], [95.2, 1217.0], [95.3, 1217.0], [95.4, 1229.0], [95.5, 1229.0], [95.6, 1229.0], [95.7, 1233.0], [95.8, 1233.0], [95.9, 1233.0], [96.0, 1238.0], [96.1, 1238.0], [96.2, 1238.0], [96.3, 1238.0], [96.4, 1242.0], [96.5, 1242.0], [96.6, 1242.0], [96.7, 1244.0], [96.8, 1244.0], [96.9, 1244.0], [97.0, 1248.0], [97.1, 1248.0], [97.2, 1248.0], [97.3, 1248.0], [97.4, 1251.0], [97.5, 1251.0], [97.6, 1251.0], [97.7, 1260.0], [97.8, 1260.0], [97.9, 1260.0], [98.0, 1263.0], [98.1, 1263.0], [98.2, 1263.0], [98.3, 1263.0], [98.4, 1267.0], [98.5, 1267.0], [98.6, 1267.0], [98.7, 1268.0], [98.8, 1268.0], [98.9, 1268.0], [99.0, 1270.0], [99.1, 1270.0], [99.2, 1270.0], [99.3, 1270.0], [99.4, 1282.0], [99.5, 1282.0], [99.6, 1282.0], [99.7, 1283.0], [99.8, 1283.0], [99.9, 1283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 84.0, "series": [{"data": [[1100.0, 1.0], [300.0, 71.0], [600.0, 39.0], [1200.0, 15.0], [700.0, 6.0], [200.0, 42.0], [400.0, 84.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 101.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 199.0, "series": [{"data": [[0.0, 199.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 101.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 103.84333333333335, "minX": 1.61952978E12, "maxY": 103.84333333333335, "series": [{"data": [[1.61952978E12, 103.84333333333335]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61952978E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 1283.0, "series": [{"data": [[2.0, 1268.0], [3.0, 1282.0], [4.0, 1242.0], [5.0, 1251.0], [6.0, 1229.0], [7.0, 1181.0], [8.0, 1217.0], [9.0, 1244.0], [10.0, 1248.0], [11.0, 1238.0], [14.0, 1263.3333333333333], [15.0, 1270.0], [16.0, 1233.0], [17.0, 602.0], [19.0, 738.0], [20.0, 705.0], [21.0, 680.0], [22.0, 567.0], [23.0, 697.0], [24.0, 470.0], [25.0, 443.0], [27.0, 481.5], [28.0, 474.0], [32.0, 461.75], [34.0, 434.0], [36.0, 479.0], [39.0, 499.0], [41.0, 435.0], [43.0, 470.0], [45.0, 699.0], [44.0, 458.0], [46.0, 478.0], [49.0, 722.0], [48.0, 556.0], [51.0, 726.5], [53.0, 687.5], [54.0, 685.0], [69.0, 678.0], [68.0, 686.0], [75.0, 640.6666666666666], [78.0, 236.0], [76.0, 426.5], [80.0, 497.3333333333333], [82.0, 294.5], [87.0, 433.90909090909093], [86.0, 490.7142857142857], [89.0, 264.375], [91.0, 252.5], [88.0, 295.0], [90.0, 266.0], [92.0, 272.7142857142857], [93.0, 274.0], [95.0, 413.0], [96.0, 523.8], [103.0, 375.42857142857144], [102.0, 308.0], [101.0, 309.0], [104.0, 359.77777777777777], [107.0, 371.75], [105.0, 320.0], [106.0, 518.0], [110.0, 349.5], [109.0, 330.5], [111.0, 389.6666666666667], [108.0, 427.0], [114.0, 406.6666666666667], [115.0, 316.0], [113.0, 573.0], [116.0, 470.25], [118.0, 533.0], [117.0, 524.0], [123.0, 511.0], [122.0, 535.0], [121.0, 506.0], [120.0, 519.0], [127.0, 495.0], [126.0, 494.0], [124.0, 490.0], [133.0, 560.0], [135.0, 530.0], [134.0, 344.5], [132.0, 432.0], [131.0, 505.5], [130.0, 348.0], [128.0, 521.5], [129.0, 650.0], [136.0, 603.0], [137.0, 443.0], [142.0, 666.5], [141.0, 660.5], [139.0, 671.0], [138.0, 677.0], [150.0, 478.5], [149.0, 403.0], [147.0, 482.0], [145.0, 371.6666666666667], [144.0, 387.85714285714283], [158.0, 518.25], [156.0, 365.0], [153.0, 328.42857142857144], [154.0, 310.75], [157.0, 302.0], [155.0, 502.6], [166.0, 453.0], [163.0, 432.0], [160.0, 423.0], [175.0, 342.0], [173.0, 489.0], [170.0, 377.5], [168.0, 375.6666666666667], [183.0, 467.0], [182.0, 452.0], [181.0, 442.0], [180.0, 422.8333333333333], [179.0, 426.5], [178.0, 407.5], [177.0, 303.0], [176.0, 485.0], [1.0, 1283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[103.83999999999992, 485.05000000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 183.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 585.0, "minX": 1.61952978E12, "maxY": 72069.56666666667, "series": [{"data": [[1.61952978E12, 72069.56666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61952978E12, 585.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61952978E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 485.05000000000007, "minX": 1.61952978E12, "maxY": 485.05000000000007, "series": [{"data": [[1.61952978E12, 485.05000000000007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61952978E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 378.2266666666666, "minX": 1.61952978E12, "maxY": 378.2266666666666, "series": [{"data": [[1.61952978E12, 378.2266666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61952978E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 166.99666666666664, "minX": 1.61952978E12, "maxY": 166.99666666666664, "series": [{"data": [[1.61952978E12, 166.99666666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61952978E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 228.0, "minX": 1.61952978E12, "maxY": 1283.0, "series": [{"data": [[1.61952978E12, 1283.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61952978E12, 684.8000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61952978E12, 1269.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61952978E12, 1215.1999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61952978E12, 228.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61952978E12, 452.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61952978E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 244.0, "minX": 17.0, "maxY": 602.0, "series": [{"data": [[17.0, 244.0], [43.0, 602.0], [240.0, 442.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 240.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 183.0, "minX": 17.0, "maxY": 477.0, "series": [{"data": [[17.0, 183.0], [43.0, 477.0], [240.0, 346.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 240.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.61952978E12, "maxY": 5.0, "series": [{"data": [[1.61952978E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61952978E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.61952978E12, "maxY": 5.0, "series": [{"data": [[1.61952978E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61952978E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.61952978E12, "maxY": 5.0, "series": [{"data": [[1.61952978E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61952978E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.61952978E12, "maxY": 5.0, "series": [{"data": [[1.61952978E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61952978E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

