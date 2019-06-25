/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.util.Date;

/**
 *
 * @author 10070369
 */
public class Livro {
    
    private int id;
    private String nome;
    private String idiomaOriginal;
    private String categoria;
    private int quantidadePagina;
    private Date dataLancamento;
    private int id_autor;
    private double nota;

    public Livro() {
    }

    public Livro(int id, String nome, String idiomaOriginal, String categoria, int quantidadePagina, Date dataLancamento, int id_autor, double nota) {
        this.id = id;
        this.nome = nome;
        this.idiomaOriginal = idiomaOriginal;
        this.categoria = categoria;
        this.quantidadePagina = quantidadePagina;
        this.dataLancamento = dataLancamento;
        this.id_autor = id_autor;
        this.nota = nota;
    }

    
    
    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIdiomaOriginal() {
        return idiomaOriginal;
    }

    public void setIdiomaOriginal(String idiomaOriginal) {
        this.idiomaOriginal = idiomaOriginal;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getQuantidadePagina() {
        return quantidadePagina;
    }

    public void setQuantidadePagina(int quantidadePagina) {
        this.quantidadePagina = quantidadePagina;
    }

    public Date getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Date dataLancamento) {
        this.dataLancamento = dataLancamento;
    }

    public int getId_autor() {
        return id_autor;
    }

    public void setId_autor(int id_autor) {
        this.id_autor = id_autor;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }
    
    
}
