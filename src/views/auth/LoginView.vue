<template>
  <div class="auth-view space-y-6">
    <div class="text-center">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Authentification</h1>
      <p class="mt-2 text-sm text-gray-600">Connectez-vous à votre espace AppTest</p>
    </div>
    
    <form @submit.prevent class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" placeholder="nom@exemple.com" 
               class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-200" />
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
        <input type="password" id="password" placeholder="••••••••" 
               class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-200" />
      </div>
      
      <button class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-200">
        Se connecter
      </button>
    </form>
    
    <div class="text-center">
      <p class="text-sm text-gray-600">
        Pas encore de compte ? 
        <router-link to="/auth/register" class="font-medium text-emerald-600 hover:text-emerald-500 underline decoration-2 underline-offset-4">S'inscrire</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles removed in favor of Tailwind */
</style>
