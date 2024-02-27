<template lang="html">
     <div class="container-fluid">
          <div v-if="article" class="container">
               <div class="row">
                    <div class="col-12 topBar">
                         {{ article.title }}
                    </div>
                    <div class="col-8 topBar">
                         <p>description</p>
                         {{ article.description }}
                    </div>
                    <div class="col-2 topBar">
                         <p>Date</p>
                         {{ new Date(article.createdAt).toLocaleDateString('us') }}
                    </div>
                    <div class="col-2 topBar">
                         <p>Updated at</p>
                         {{ new Date(article.updatedAt).toLocaleDateString('us') }}
                    </div>
                    <div class="col-4 topBar">
                         <p>Author</p>
                         <div class="Author">
                              <div class="img">
                                   <p>{{ article.author.username[0] }}</p>
                              </div>
                              <div class="text">{{ article.author.username }}</div>
                         </div>
                         <div class="p">
                              {{ article.author.bio }}
                         </div>
                    </div>
                    <div class="col-8 topBar">
                         <p>Body</p>
                         {{ article.body }}
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
     computed: {
          ...mapState({
               article: state => state.articles.articleDetail,
          })
     },
     props: {
          articleDelail: {
               type: Object,
               required: true
          }
     }
}
</script>
<style lang="css">
.topBar {
     padding: 10px;
     font-weight: 500;
     font-size: 20px;
     text-transform: capitalize;
     margin-top: 10px;
}

.topBar p {
     font-size: 15px;
     color: #b5b4b4;
}

.Author {
     display: flex;
     align-items: start;
     justify-content: start;
     gap: 10px;
     margin-bottom: 10px;
}

.Author .img {
     width: 50px;
     height: 50px;
     background-color: rgb(37, 37, 115);
     border-radius: 50%;
}

.Author .img p {
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 100%;
     font-size: 20px;
     font-weight: bold;
     color: red;
}
</style>