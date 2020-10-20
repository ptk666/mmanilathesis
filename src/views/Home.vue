<template>
  <v-app>
    <Navbar />
    <v-img
      dark
      src="frontpage2.jpg"
    >
      <v-container
       fluid
       fill-height
      >
        <v-layout
          align-center
          justify-center
          column
        >

        
          <div
            class="display-4 font-weight-black white--text"
            id="homePageText"
          >
            <span id="homePageSpan">MURDER</span> MANILA
          </div>
          <div
            class="subtitle font-weight-light white--text"
          >
            Lorem ipsum dolor sit amet.
          </div>
          <v-btn
            class="mt-8"
            color="#DD3636"
            router-link to="/form"
          >
            BOOK NOW
          </v-btn>
        </v-layout>
      </v-container>
    </v-img>

    <v-layout id="about" class="pa-15">
      <v-container fill-height>
        <v-row  justify="center" class="black--text">
            <v-col cols="12" align="center" class="black--text" >
              <div class="display-2 font-weight-bold pa-3 ma-3">ABOUT MURDER MANILA</div>
              <div class="body-2 font-weight-light"><span id="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea voluptatem asperiores sapiente voluptates. Autem, eaque nihil rem possimus illum alias fuga a est inventore nulla excepturi obcaecati eum ipsam doloremque veniam deserunt laboriosam temporibus, fugit quaerat minus dolore similique nesciunt!</span></div>
            </v-col>
        </v-row>
      </v-container>
    </v-layout>
    
    <v-layout id="howTo" class="pa-10">
      <v-container fill-height>
        <v-row>
          <v-col cols="12" class="white--text">
            <div class="display-2 font-weight-bold pa-3 ma-3" align="center">HOW DO I PLAY MURDER MANILA?</div>
            <div class="d-inline-flex">
              <v-card flat elevation="0" class="white--text" align="center" color="black">
                <v-card-title class="justify-center">Socialize</v-card-title>
                <v-card-text class="white--text font-weight-light"><span id="text">Everyone at your party is guilty! Mingle with potential victims, allies or killers. Get to know their dirty little secrets.</span></v-card-text>
              </v-card>
              <v-card flat elevation="0" class="white--text" align="center" color="black">
                <v-card-title class="justify-center">Whodunnit</v-card-title>
                <v-card-text class="white--text font-weight-light"><span id="text">From all the clues gathered, analyze and deduce who do you think is the mastermind.</span></v-card-text>
              </v-card>
              <v-card flat elevation="0" class="white--text" align="center" color="black">
                <v-card-title class="justify-center">Decide</v-card-title>
                <v-card-text class="white--text font-weight-light"><span id="text">With all the clues that were presented, decide on who is the suspect for the crime and help the good guys capture the bad guys.</span></v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>

    <v-img
      src="parallax1.png"
    >
      
    </v-img>

    <section id="themes">
      <v-container fill-height class="pa-10 mb-3">
        <v-row class="d-flex d-inline-flex">
          <v-col cols="6">
            <v-card class="white--text" color="black">
              <v-img src="murder4.png"></v-img>
              <v-card-title class="subtitle-1 font-weight-bold">Murder at the Mansion</v-card-title>
              <v-card-text class="subtitle-2 white--text font-weight-light"><span id="text">ipsum dolor sit amet consectetur adipisicing elit. Odit, deserunt!</span></v-card-text>
            </v-card>
          </v-col>
           <v-col cols="6">
            <v-card class="white--text" color="black">
              <v-img src="revenge.jpg"></v-img>
              <v-card-title class="subtitle-1 font-weight-bold">Revenge at the Reunion</v-card-title>
              <v-card-text class="subtitle-2 white--text font-weight-light" ><span id="text">ipsum dolor sit amet consectetur adipisicing elit. Odit, deserunt!</span></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-container fluid fill-height id="faq" class="pa-10">
      <v-row column>
        <v-col cols="12" class="white--text">
          <div class="display-2 font-weight-bold pa-3 ma-3" align="center">FREQUENTLY ASKED QUESTIONS (FAQs)</div>
          <div v-for="faq in faqs" :key="faq.id">
            <div class="display-1 font-italic pt-2 pb-2">{{ faq.question }}</div>
            <li class="subtitle-1 font-italic font-weight-light pt-3 pb-3"><span id="text">{{ faq.answer }}</span></li> 
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      faqs: [
        {question: 'How to book?', answer: 'Choose your mystery > Finalize the date, time, venue, and headcount of participants > Email info@murdermanila.com'},
        {question: 'How much is Murder Manila?', answer: 'Price starts at PHP 10,000 for 8 people then additional PHP 500/head for every person in excess.'},
        {question: 'What are the inclusions?', answer: 'The package includes the following: A mystery that can be played for 2 hours, complete with individual roles, objectives, and other pertinent guidelines for each player such as costume and background story per character.'}
      ],
      srcs: [
        {src: 'murder.jpg'},
        {src: 'revenge.jpg'}
      ],
      selected: ''
    }
  },
  

}
</script>


<style scoped>
  #homePageText {
    text-shadow:1px 1px 3px #333333;
  }

  #homePageSpan {
        color: #DD3636;
        letter-spacing: 0.5px;
  }

  #howTo {
    background-color: black;
  }

  #text {
    letter-spacing: 1.2px;
    line-height: 1.6;
  }

  #faq {
    background-color:  #DD3636;
  }

  #themes {
    background-color: black;
  }

  .line-through {
    text-decoration: line-through;
  }
</style>
