function status(request, response) {
  response.status(200).json({ chave: "são acima da média mesmo" });
}

export default status;
