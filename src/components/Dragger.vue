<template>
    <ie-drag
        :instructions="dragDrop.instructions"
        :sortableElements="dragDrop.sortableElements"
        :panels="dragDrop.panels"
        :panels_name="dragDrop.panels_name"
    ></ie-drag>
</template>

<script>
import Vuedrag from 'vuedraggable'
import lodash from 'lodash'
import Dragger from 'ie-quiz-dragdrop/src/ie-quiz-dragdrop.vue'
export default{
    components: 
    {
      Vuedrag,
      'ie-drag': Dragger
    },
    name: 'Dragger',
    data (){
     return{
        dragDrop: {
        instructions: 'Sayonara Arrivederchi',
        sortableElements: [
            {id: 0, panel: 1, sorted: false, name: "1"},
            {id: 1, panel: 2, sorted: false, name: "2"},
            {id: 2, panel: 3, sorted: false, name: "3"},
            {id: 3, panel: 4, sorted: false, name: "4"},
            {id: 4, panel: 5, sorted: false, name: "5"}
        ],
        panels: [[], [], [], [], []],
        panels_name: [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
      }
     }
    }
        
}
</script>

<<style lang="scss">
.panel-usorted-elements{
    margin-top: 90px;
}
.draggable-component{
    min-height: 40px;
    display: block; 
}
.dragable-li{
    background-color: #fff;
    padding: 8px;
    margin: 12px 0px;
    cursor: move;
    border: 1px solid #ccc;
}
.panel-body .dragable-li{
    margin: 0px;
}
.ghost-sortable-item{
    opacity: 0.75;
    border: 2px dashed #ccc;
}
.dragging-sortable-item{
    color: #fff;
    background-color: rgb(0,51,141);
    opacity: 1;
    border: 1px solid #ccc;
}
.ignore-elements{
    cursor: no-drop;
    background-color: #e9eedc;
}
</style>
