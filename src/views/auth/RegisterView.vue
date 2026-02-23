<template>
  <div class="auth-view">
    <h1>Inscription</h1>
    <form @submit.prevent>
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <button>S'inscrire</button>
    </form>
    <router-link to="/auth">Déjà un compte ? Se connecter</router-link>
  </div>
</template>

<style scoped>
.auth-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
