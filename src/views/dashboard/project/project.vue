<template>
    <div class="hello">
        <selectTreeVue v-model="value" @treeSelect="handleSelect" />
    </div>
</template>

<script lang="ts">
import selectTreeVue from "./select-tree.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "HelloWorld",
    components: { selectTreeVue },
    setup() {
        const value = ref("");
        function handleSelect(data:any) {
            console.log(data);
        }
        return {
            handleSelect,
            value,
        };
    },
});
</script>