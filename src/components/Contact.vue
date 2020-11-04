<template>

<div class="jumbotron text-center">
    <h1>Send A Message</h1>
    <br><br>
    <form action="">
        <input name="name" type="text" placeholder="full name"> <br>
        <input name="email" type="email" placeholder="email"> <br>
        <textarea name="message" id="" cols="30" rows="5" placeholder="message goes here"></textarea> <br>
        <a class="btn btn-primary" type="submit" href="">send</a>
    </form>
</div>

</template>

<style>

input{
    width: 70%;
    height: 50px;
    margin-bottom: 20px;
}

textarea {
    width: 70%;
    height: 230px;
}

@media(max-width:600px) {
    input{
        width: 50%;
        height: 30px;
    }
    textarea {
    width: 50%;
    height: 100px;
}
}

</style>