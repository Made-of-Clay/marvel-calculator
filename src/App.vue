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
                    :max="rankCount"></circle-slider>
                <span class="power-rank-label">
                    <span class="power-rank-key">{{powerRankKey}}</span>
                    <span class="power-rank-mid">{{powerRankMid}}</span>
                </span>
            </div>
            <div class="circle-slider-container roll-result">
                <circle-slider v-model="rollResult"
                    :side="dims.side"
                    :circle-width="dims.circleWidth"
                    :progress-width="dims.progressWidth"
                    :nob-radius="dims.nobRadius"
                    :min="1"
                    :max="101"></circle-slider>
                <span class="roll-result-label">{{rollResult}}</span>
            </div>
        </div>
    </main>
</template>

<script>
import powerRanks from '../power-ranks';

let powerRankKeys = Object.keys(powerRanks);

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
    },
};
</script>

<style>
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
