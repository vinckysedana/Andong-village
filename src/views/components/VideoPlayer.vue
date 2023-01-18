<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>
<script>
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });

    $('.vjs-big-play-button').on('click', (el) => {
      window.location = "https://www.youtube.com/watch?v=HslNQ5IN63A";
    }); 
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
</script>