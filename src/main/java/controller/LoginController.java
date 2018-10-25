package controller;

import java.io.Serializable;

import javax.annotation.PostConstruct;
import javax.enterprise.inject.Model;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.inject.Named;

@SuppressWarnings("serial")
@Named
public class LoginController implements Serializable{
	
	private String nome = "SÉRGIO";
	
	@PostConstruct
	public void init() {
		nome = "JOELSON";
	}

	public void teste() {
		System.out.println("teste1");
	}
	
	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	

}
