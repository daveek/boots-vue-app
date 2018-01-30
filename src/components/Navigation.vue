<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link to="/" tag="a" exact v-once v-html="title" class="navbar-brand"></router-link>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                         
                        <router-link to="/" tag="li" active-class="active" exact>
                            <a v-html="HOme"></a>
                        </router-link>
                        <router-link to="/dragger" tag="li" active-class="active" exact>
                            <a v-html="Dragger"></a>
                        </router-link>

                    </ul>
                </div>
            </div>
        </nav>
        
        <div class="main-container container">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <button class="btn" @click="openNextSection">NEXT</button>
        </div>
    </div>
</template>

<script>
    //import { mapState } from 'vuex';

    export default{
        props: ['sections', 'title'],
       
        methods: {
            openNextSection: function(id){
                this.$store.commit('openSection');
            },
            isDisabled: function(){
                return true;
            }
        }/*,
        beforeRouteEnter (to, from, next){
            console.log('a')
        },
        beforeRouteUpdate: function (to, from, next){
            console.log('a')
            if(this.sections[to.name].opened){
                next()
            }
        }*/
    }
</script>
