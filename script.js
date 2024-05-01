
        function changeQuality(quality) {
            let videoPlayer = document.getElementById('video-player');
            if (quality === '240') {
                videoPlayer.src = "https://prod-ent-live-gm.jiocinema.com/hls/live/2100323/hd_akamai_androidmob_avc_hin_ipl_s1_m1010524/master_240p.m3u8";
            } else if (quality === '360') {
                videoPlayer.src = "https://prod-ent-live-gm.jiocinema.com/hls/live/2100323/hd_akamai_androidmob_avc_hin_ipl_s1_m1010524/master_360p.m3u8";
            } else if (quality === '480') {
                videoPlayer.src = "https://prod-ent-live-gm.jiocinema.com/hls/live/2100323/hd_akamai_androidmob_avc_hin_ipl_s1_m1010524/master_480p.m3u8";
            } else if (quality === '720') {
                videoPlayer.src = "https://prod-ent-live-gm.jiocinema.com/hls/live/2100323/hd_akamai_androidmob_avc_hin_ipl_s1_m1010524/master_720p.m3u8";
            } else if (quality === '1080') {
                videoPlayer.src = "https://prod-ent-live-gm.jiocinema.com/hls/live/2100323/hd_akamai_androidmob_avc_hin_ipl_s1_m1010524/master_1080p.m3u8";
            } else if (quality === '4k') {
                videoPlayer.src = "https://prod-ent-live-gm.jiocinema.com/hls/live/2100322/uhd_akamai_ctv_avc_hin_ipl_s1_m1010524/master.m3u8";
            }
            videoPlayer.play();
        }
    