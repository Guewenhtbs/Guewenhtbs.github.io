import 'whatwg-fetch';

export const requeteClient = async (message) => {
    try {
      const response = await fetch(`/api/trigger`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ trigger: message })
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      console.log('Envoi sur l API réussi');
    } catch (error) {
      console.error('Il y a eu une erreur lors du fetch:', error);
    }
  };
