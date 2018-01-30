import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
        sections: [
            {   
                ruta: 'sony-case',        
                enlace:'Sony Case',              
                opened: true
            }
            /*,
            {   
                ruta: 'laws-regulation',
                enlace:'Laws &amp; Regulations',
                opened: false
            },
            {   
                ruta: 'privacy',
                enlace:'Privacy at IE',
                opened: false
            },
            {   
                ruta: 'checklist',
                enlace:'Checklist',
                opened: false
            }
            */
        ]
    }
	
});

export default store;