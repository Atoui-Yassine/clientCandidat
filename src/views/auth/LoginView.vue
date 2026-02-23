<template>
  <div class="auth-view">
    <h1>Authentification</h1>
    <form @submit.prevent>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <button>Se connecter</button>
    </form>
  </div>
</template>

<style scoped>
.auth-view {
  padding: 20px;
  max-width: 400px;
  margin: auto;
}
</style>
