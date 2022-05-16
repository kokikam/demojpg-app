<template>
  <div class="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
    <ul class="w-full max-w-md">
        <h1>Draggable: {{ draggingMessage }}</h1>
      <draggable
        :list="users"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="draggingStart"
        @end="draggingStop">
        <template #item="{ element }">
        <li
          class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move">
          <div class="flex items-center list-group-item" :class="{ 'not-draggable': !enabled }">
            <img class="w-10 h-10 rounded-full" :src="element.avatar" :alt="element.name">
            <p class="ml-2 text-gray-700 font-semibold font-sans tracking-wide">{{element.name}}</p>
            <div class="flex">
              <button aria-label="Edit user"
                      class="p-1 focus:outline-none focus:shadow-outline text-teal-500 hover:text-teal-600"
                      @click="onEdit(element)">
                      <div v-html="$feathericons['edit'].toSvg()"></div>
              </button>
              <button aria-label="Delete user"
                      class="p-1 focus:outline-none focus:shadow-outline text-red-500 hover:text-red-600"
                      @click="onDelete(element)">
                      <div v-html="$feathericons['trash-2'].toSvg()"></div>
              </button>
            </div>
          </div>
        </li>
        </template>
      </draggable>
    </ul>
  </div>
</template>

<script setup>

import draggable from "vuedraggable";

var dragging = false
let enabled = true

const draggingMessage = ref("");
 
    const users = reactive([
      {
        id: 1,
        name: "Adrian Schubert",
        avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
      },
      {
        id: 2,
        name: "Violet Gates",
        avatar: "https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png"
      },
      {
        id: 3,
        name: "Steve Jobs",
        avatar: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png"
      },
      {
        id: 4,
        name: "Yassine Smith",
        avatar: "https://pickaface.net/gallery/avatar/unr_yassine_191124_2012_3gngr.png"
      },
      {
        id: 5,
        name: "Senior Saez",
        avatar: "https://pickaface.net/gallery/avatar/elmedinilla541c03412955c.png"
      }
    ]);

      function onEdit(user) {
        alert(`Editing ${user.name}`);
        window.console.log("Dragg: "+ dragging);
      }

      function onDelete(user) {
        alert(`Deleting ${user.name}`);
      }

       function checkMove(e)  {
        window.console.log("Future index: " + e.draggedContext.futureIndex);
       }

       function draggingStart(e)  {
        dragging = true;
        draggingMessage.value = "DRAGGING!";
       }

       function draggingStop(e)  {
        dragging = false;
        draggingMessage.value = "";
       }

</script>

<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.not-draggable {
  cursor: no-drop;
}
</style>