<template>
  <div class="seat">
    <nav class="navbar">
      <div class="navbar_menu">
        화성시 동탄중앙이음터도서관
      </div>
      <div class="navbar_name">
        <img
          src="@/assets/images/logo_black.png"
          class="navbar_logo"
          @click="goHome">
      </div>
    </nav>

    <div class="layout">
      <div class="seat-container">
        <div class="seat-situation">
          <span class="yellowCircle"></span>&nbsp;사용중&nbsp;<span class="blankCircle"></span>&nbsp;빈좌석
        </div>

        <div class="container">
          <span class="seat-egg">A</span>
          <div class="seat-wrapper2" v-for="(i, index) in 18" :key="i">
            <button id="seat-box2" class="seat-box2" :class="{'boxColor': isActive & index / 18 == 0}">
              <span class="seat-num">{{ i }}</span>
            </button>
          </div>
        </div>

        <div class="container" v-for="(seatEgg, index) in seatEggs" :key="seatEgg" :class="{'seat-container-margin': index % 2 == 0}">
          <span class="seat-egg">{{ seatEgg }}</span>
          <div class="seat-wrapper" v-for="seat in seats" :key="seat">
            <button class="seat-box">
              <span class="seat-num">{{ seat }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="apply-container">
        <div class="seat-percent">
          <br />
          <div class="percent-title">열람실 좌석 사용 현황</div>
          <div class="set-size charts-container">
            <div class="pie-wrapper progress-75 style-2">
              <span class="label">0<span class="smaller">%</span></span>
              <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
              </div>
              <div class="shadow"></div>
            </div>
          </div>
        </div>
        <div class="login-container">
          <div class="login">
            <span class="id-name">ID:</span>&nbsp;<input class="id-input" type="text" name="" placeholder="회원번호를 입력하세요.." v-model="userId">
          </div>
          <div class="apply">
            <button class="apply-btn" type="button" name="button" @click="applySeat">사용 신청</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyC1-_6UVOOoSL9y6uV5VFPoGxx1GCGCO_0',
  authDomain: 'library-manager-greenteabingsu.firebaseapp.com',
  databaseURL: 'https://library-manager-greenteabingsu.firebaseio.com',
  projectId: 'library-manager-greenteabingsu',
  storageBucket: 'library-manager-greenteabingsu.appspot.com',
  messagingSenderId: '882367932750'
}
firebase.initializeApp(config)
let db = firebase.database()

let seatRef = db.ref('seat')
let userIdRef = db.ref('seat/test1/userId')
userIdRef.set('0226daniel')

let dbUserId
userIdRef.on('value', function (snapshot) {
  dbUserId = snapshot.val()
})

let kickRef = db.ref('seat/test1/kick')
kickRef.set(0)

let isReservedRef = db.ref('seat/test1/isReserved')
isReservedRef.set(false)

let lastDetectedRef = db.ref('seat/test1/lastDetected')
lastDetectedRef.set(0)

export default {
  name: 'seat',
  data: () => ({
    seatEggs: ['B', 'C', 'D', 'E', 'F', 'G'],
    seats: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    userId: '',
    isActive: false
  }),
  firebase: {
    seatsRef: seatRef
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    applySeat () {
      if (dbUserId === this.$data.userId) {
        isReservedRef.set(true)
        this.isActive = true
        this.userId = ''
        this.kickChangeBgColor()
        this.offlineSeat()
      }
    },
    offlineSeat () {
      lastDetectedRef.on('value', function (snapshot) {
        if (snapshot.val() > 30000) {
          alert('A1좌석, 장기간 미사용으로 퇴실처리 되었습니다. 관리자분께서는 자리를 정돈해주세요.')
          lastDetectedRef.set(0)
          let ob = document.getElementById('seat-box2')
          ob.style.backgroundColor = '#fff'

          kickRef.set(0)
        }
        // lastDetectedRef.off()
      })
    },
    kickChangeBgColor () {
      kickRef.on('value', function (snapshot) {
        if (snapshot.val() === false) {
          alert('A1좌석, 장기간 미사용으로 퇴실처리 되었습니다. 관리자분께서는 자리를 정돈해주세요.')
          kickRef.set(0)
          let ob = document.getElementById('seat-box2')
          ob.style.backgroundColor = '#fff'
          // kickRef.off()
        }
        // console.log(snapshot.val())
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/public.scss'
</style>
