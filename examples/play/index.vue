<template>
    <div>
        <h1>Success Conf!</h1>
        <et-input placeholder="这是placeholder" size="mini" clearable/>
        <button @click="show = true">点击</button>
        <et-dialog class="wrap" :visible="show" title="对话框"> 
            <h1>您好</h1>
        </et-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                show: false
            }
        }
    }
</script>

