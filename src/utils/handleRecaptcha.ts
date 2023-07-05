export const handleRecaptcha = async (action, key) => {
    const api = `http://localhost:8080/auth/create-assessment?action=${action}`
    const token = await grecaptcha.enterprise?.execute(key, {
      action: action,
    });
    let options = {
      method: "POST",
      headers: {
        "X-Firebase-AppCheck": token
      },
      
    };
    let res = await fetch(api, options);
    const resJson = await res.json();
    const score = await resJson?.score;
    if (score > 0.6) {
      return true;
    } else {
      return false;
    }
  };