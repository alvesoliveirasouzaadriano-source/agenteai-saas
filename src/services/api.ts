/**
 * API Service for Agente AI
 * Handles communication with n8n and Supabase nodes
 */

const N8N_MENSAGEM_URL = import.meta.env.VITE_N8N_WEBHOOK_MENSAGEM;
const N8N_CONFIG_URL = import.meta.env.VITE_N8N_WEBHOOK_CONFIG;

export const apiService = {
  /**
   * Sends a message to the n8n "Super Agente" workflow
   */
  async sendMessage(phone: string, name: string, message: string) {
    try {
      const response = await fetch(N8N_MENSAGEM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          senderName: name,
          text: { message }
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Erro ao enviar mensagem para n8n:', error);
      throw error;
    }
  },

  /**
   * Updates Agent Configuration in the backend
   */
  async updateAgentConfig(config: any) {
    try {
      const response = await fetch(N8N_CONFIG_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      return await response.json();
    } catch (error) {
      console.error('Erro ao atualizar configuração:', error);
      throw error;
    }
  },

  /**
   * Supabase integration would go here using the Supabase client
   * For now, we use the n8n webhooks which often handle the Supabase logic
   */
};
