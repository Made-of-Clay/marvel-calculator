<template>
    <main>
        <h1>Marvel Result Calculator v3</h1>
        <div id="circle-slider-group">
            <div class="circle-slider-container power-rank">
                <circle-slider v-model="powerRankIndex"
                    :side="dims.side"
                    :circle-width="dims.circleWidth"
                    :progress-width="dims.progressWidth"
                    :nob-radius="dims.nobRadius"
                    :min="0"
                    :max="rankCount"
                    :circle-color="circleColor"
                    :progress-color="color.progress"
                    :knob-color="color.knob"
                    class="circle-slider-graphic"></circle-slider>
                <span class="power-rank-label circle-slider-label">
                    <span class="power-rank-key">{{powerRankKey}}</span>
                    <span v-show="showMid" class="power-rank-mid">{{powerRankMid}}</span>
                </span>
            </div>
            <div class="circle-slider-container roll-result">
                <circle-slider v-model="rollResult"
                    :side="dims.side"
                    :circle-width="dims.circleWidth"
                    :progress-width="dims.progressWidth"
                    :nob-radius="dims.nobRadius"
                    :min="1"
                    :max="100"
                    :circle-color="circleColor"
                    :progress-color="color.progress"
                    :knob-color="color.knob"
                    class="circle-slider-graphic"></circle-slider>
                <span class="roll-result-label circle-slider-label">{{rollResult}}</span>
            </div>
        </div>
    </main>
</template>

<script>
import powerRanks from '../power-ranks';

let powerRankKeys = Object.keys(powerRanks);
let colorMap = {
    white: { progress: '#eee', knob: '#ddd' },
    green: { progress: '#24C82F', knob: '#1BE028' },
    yellow: { progress: '#DCE54A', knob: '#F3FF25' },
    red: { progress: '#CC2626', knob: '#FF2222' },
};

export default {
    data() {
        return {
            rankCount: powerRankKeys.length - 1,
            powerRankIndex: 0,
            rollResult: 0,

            dims: {
                circleWidth: 7,
                progressWidth: 10,
                nobRadius: 2,
                side: 250 // pretend its diameter
            },

            circleColor: '#777',
            progressColor: '#eee',
            knobColor: '#ddd'
        };
    },
    computed: {
        powerRankKey() {
            return powerRankKeys[this.powerRankIndex];
        },
        currentRank() {
            return powerRanks[this.powerRankKey];
        },
        powerRankMid() {
            return this.currentRank.mid;
        },
        showMid() {
            if (!this.powerRankKey) return false;
            return (this.powerRankKey.search(/c\d00/) < 0);
        },
        color() {
            let rank = this.currentRank; // object
            let result = this.rollResult; // number
            // where is result in rank obj colors?
            let showColor;
            ['white', 'green', 'yellow', 'red'].forEach(color => {
                if (Array.isArray(rank[color])) {
                    // is it between the two numbers?
                    if (rank[color][0] <= result || result >= rank[color][1]) {
                        showColor = color;
                    }
                } else {
                    // is it the same?
                    if (result === rank[color]) {
                        showColor = color;
                    }
                }
            });
            return colorMap[showColor] || colorMap.white;
        },
    },
};
</script>

<style>
:root {
    --text-color: #eee;
}
h1 {
    color: var(--text-color);
    margin: 0 0 1em;
}
main {
    background-color: #2e3238;
    box-sizing: border-box;
    padding-top: 1em;
    text-align: center;
}
circle, path {
    transition: stroke 0.5s;
}
.circle-slider-container {
    display: inline-block;
    position: relative;
    vertical-align: top;
}
.circle-slider-label {
    color: var(--text-color);
    font-size: 3em;
    left: 0;
    line-height: 5;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
}
.circle-slider-graphic {
    position: relative;
    z-index: 1;
}
.roll-result-label::after {
    content: '%';
}
.power-rank-mid {
    font-size: 0.9em;
}
.power-rank-mid::before {
    content: '(';
}
.power-rank-mid::after {
    content: ')';
}
</style>
