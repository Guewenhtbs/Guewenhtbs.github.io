export const requeteClient = async (code) => {
    try {
      const response = await fetch('https://fetchurl', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: code
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      console.log('Envoi sur l API réussi');
    } catch (error) {
      console.error('Il y a eu une erreur lors du fetch:', error);
    }
  };
