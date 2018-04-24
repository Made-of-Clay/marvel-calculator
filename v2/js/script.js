/*
    Colors transition
        body 
            background-color
            box-shadow (inset)
        #container
            border/outline-color

    #container background is maybe black opacity gradient?
    Add meta tag for viewport
 */
var rs = [
    {
        'name'  : 'Shift 0',
        'abbv'  : 'S0',
        'white' : '1-65',
        'green' : '66-94',
        'yellow': '95-99',
        'red'   : '100',
        'mid'   : '0'
    },
    {
        'name'  : 'Feeble',
        'abbv'  : 'Fe',
        'white' : '1-60',
        'green' : '61-90',
        'yellow': '91-99',
        'red'   : '100',
        'mid'   : '2'
    },
    {
        'name'  : 'Poor',
        'abbv'  : 'Pr',
        'white' : '1-55',
        'green' : '56-85',
        'yellow': '86-99',
        'red'   : '100',
        'mid'   : '4'
    },
    {
        'name'  : 'Typical',
        'abbv'  : 'Ty',
        'white' : '1-50',
        'green' : '51-80',
        'yellow': '81-97',
        'red'   : '98-100',
        'mid'   : '6'
    },
    {
        'name'  : 'Good',
        'abbv'  : 'Gd',
        'white' : '1-45',
        'green' : '46-75',
        'yellow': '76-97',
        'red'   : '98-100',
        'mid'   : '10'
    },
    {
        'name'  : 'Excellent',
        'abbv'  : 'Ex',
        'white' : '1-40',
        'green' : '41-70',
        'yellow': '71-94',
        'red'   : '95-100',
        'mid'   : '20'
    },
    {
        'name'  : 'Remarkable',
        'abbv'  : 'Rm',
        'white' : '1-35',
        'green' : '36-65',
        'yellow': '66-94',
        'red'   : '95-100',
        'mid'   : '30'
    },
    {
        'name'  : 'Incredible',
        'abbv'  : 'In',
        'white' : '1-30',
        'green' : '31-60',
        'yellow': '61-90',
        'red'   : '91-100',
        'mid'   : '40'
    },
    {
        'name'  : 'Amazing',
        'abbv'  : 'Am',
        'white' : '1-25',
        'green' : '26-55',
        'yellow': '56-90',
        'red'   : '91-100',
        'mid'   : '50'
    },
    {
        'name'  : 'Monstrous',
        'abbv'  : 'Mn',
        'white' : '1-20',
        'green' : '21-50',
        'yellow': '51-85',
        'red'   : '86-100',
        'mid'   : '75'
    },
    {
        'name'  : 'Unearthly',
        'abbv'  : 'Un',
        'white' : '1-15',
        'green' : '16-45',
        'yellow': '46-85',
        'red'   : '86-100',
        'mid'   : '100'
    },
    {
        'name'  : 'Shift X',
        'abbv'  : 'X',
        'white' : '1-10',
        'green' : '11-40',
        'yellow': '41-80',
        'red'   : '81-100',
        'mid'   : '150'
    },
    {
        'name'  : 'Shift Y',
        'abbv'  : 'Y',
        'white' : '1-6',
        'green' : '7-40',
        'yellow': '41-80',
        'red'   : '81-100',
        'mid'   : '250'
    },
    {
        'name'  : 'Shift Z',
        'abbv'  : 'Z',
        'white' : '1-3',
        'green' : '4-35',
        'yellow': '36-75',
        'red'   : '76-100',
        'mid'   : '500'
    },
    {
        'name'  : 'Class 1000',
        'abbv'  : 'c1000',
        'white' : '1',
        'green' : '2-35',
        'yellow': '36-75',
        'red'   : '76-100',
        'mid'   : '1000'
    },
    {
        'name'  : 'Class 3000',
        'abbv'  : 'c3000',
        'white' : '1',
        'green' : '2-30',
        'yellow': '31-70',
        'red'   : '71-100',
        'mid'   : '3000'
    },
    {
        'name'  : 'Class 5000',
        'abbv'  : 'c5000',
        'white' : '1',
        'green' : '2-25',
        'yellow': '26-65',
        'red'   : '66-100',
        'mid'   : '5000'
    },
    {
        'name'  : 'Beyond',
        'abbv'  : 'B',
        'white' : '1',
        'green' : '2-20',
        'yellow': '21-60',
        'red'   : '61-100',
        'mid'   : 'x'
    }
];

$(document).ready(function() {
    var mstr = Master_Controller();
});

// ----------------------- BUTTONS CONTROLLER -----------------------
function Buttons_Controller(container, master) {
    if(typeof(container) === 'undefined') {
        return null;
    }

    var self = this;

    // --- Assigns properties
    this.cont  = container;
    this.$cont = $(container);
    this.btns  = $(container).children('.btn');
    this.pr    = $('#power_ranks');

    this.makePowerRanks = function() {
        for(var x=0, lis=''; x<rs.length; x++) {
            var cur = rs[x];

            lis += '<li data-index="'+x+'">'+cur.name+' ('+cur.mid+')</li>';
        }

        self.prs = $(lis).appendTo(self.pr);
    };

    this.assignListeners = function() {
        var power_ranks = $('#power_ranks');

        // --- Click Number Button
        $(self.btns).click(function() {
            if(this.id === 'clear') {
                master.results.updateResults('clear');
            } else if(this.id === 'backspace') {
                master.results.backspaceResults();
            } else {
                master.results.updateResults(this.innerHTML);
            }

            master.results.checkResults();
        });

        // --- Change Power Rank
        power_ranks.on('click', 'li', function() {
            var cur = $(this),
                inx = cur.index();

            master.results.powerRank = rs[inx];
            master.results.updateResults();
            return false;
        });

        // --- Power Rank Toggle
        $('.pr_toggle').click(function() {
            if(window.innerWidth <= 850) {
                $(this).parent().toggleClass('show');
            }
        });
    };

    // init actions
    this.makePowerRanks();
}
// ----------------------- RESULTS CONTROLLER -----------------------
function Results_Controller(master) {
    var self = this;
    this.display = 0;
    this.resColor = 'white';
    this.powerRank = rs[0];

    this.checkResults = function() {
        var result_colors = ['white', 'green', 'yellow', 'red'];
        if(self.display === 0) {
            self.resColor = 'white';
        } else {
            for(var cur in self.powerRank) {
                if(master.myInArray(cur, result_colors)) {
                    var pcs = self.powerRank[cur].split('-');
                    // check if [0] < self.display < [1]
                    if(pcs.length === 1) { // is not a range
                        if(parseInt(pcs[0]) === self.display) {
                            self.resColor = cur.toString();
                        }
                    } else if(pcs.length === 2) { // is a range
                        if(parseInt(pcs[0]) <= self.display && self.display <= parseInt(pcs[1])) {
                            self.resColor = cur.toString();
                        }
                    }
                }
            }
        }
    };

    this.updateResults = function(updateWith) {
        var display = self.display.toString();

        if(typeof updateWith === 'undefined') {
            // nothing to update with (nothing passed) - pass it through
            newSum = display;
        } else if(updateWith === 'clear') {
            self.display = 0;
            newSum = 0;
        } else {
            // some value given, check it out
            if(display === '0') {
                // overwrite the display to prevent leading 0
                newSum = updateWith;
            } else {
                // concat updateWith value to display value
                newSum = display + updateWith.toString();
            }
        }
        newSum = parseInt(newSum);

        if(newSum >= 100) {
            self.display = 100;
        } else if(newSum < 100 && newSum >= 0) {
            self.display = newSum;
        }
        self.checkResults();
        master.updateDisplay();
    };

    this.backspaceResults = function() {
        var dispLen = self.display.toString().length;

        if(dispLen === 1) {
            self.display = 0;
        } else if(dispLen > 1) {
            var newRes = self.display.toString(),
                newRes = newRes.substr(0, newRes.length-1),
                newRes = parseInt(newRes);

            self.display = newRes;
        } else if(self.display.length < 1 || self.display.length > 3) {
            self.display = 0;
            alert('Quit cheating (Res2)');
            console.log('Res2 Err: display.length: ', self.display.length);
        }

        self.updateResults();
    };
}
// ----------------------- MASTER CONTROLLER -----------------------
function Master_Controller() {
    var self = this,
        body = $('body'),
        res  = $('#theResults');
        // dispRes = $('#display_result');
    var theRes = {
        display : res.children('.display'),
        abbv    : res.children('.pr_abbv'),
        mid     : res.children('.pr_mid')
    };
    
    this.results = new Results_Controller(self);
    this.btns = new Buttons_Controller('#buttons', self);

    this.btns.assignListeners();

    this.updateTheBody = function() {
        body.removeClass('white green yellow red').addClass(self.results.resColor);
    };

    this.updateDisplay = function() {
        // theRes.display.text(self.results.display.toString()+' ('+self.results.powerRank.abbv+')');
        // theRes.display.text(self.results.display.toString());
        theRes.display.text(self.results.display);
        theRes.abbv.text(self.results.powerRank.abbv);
        theRes.mid.text(self.results.powerRank.mid);
        self.updateTheBody();
    };

    this.myInArray = function(needle, haystack, strict) {
        if(typeof strict === 'undefined') {
            strict = true;
        }
        for(var i=0; i<haystack.length; i++) {
            var cur = haystack[i];

            if(strict) {
                if(needle === cur) {
                    return true;
                }
            } else {
                if(needle == cur) {
                    return true;
                }
            }
        }
        return false; // didn't find matches
    };
}
