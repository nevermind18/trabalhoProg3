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
public class Autor {
    
    private int id;
    private String nome;
    private Date dataNasci;
    private Date dataMorte;
    private String nascionalidade;

    public Autor() {
    }

    public Autor(int id, String nome, Date dataNasci, Date dataMorte, String nascionalidade) {
        this.id = id;
        this.nome = nome;
        this.dataNasci = dataNasci;
        this.dataMorte = dataMorte;
        this.nascionalidade = nascionalidade;
    }

    public String getNascionalidade() {
        return nascionalidade;
    }

    public void setNascionalidade(String nascionalidade) {
        this.nascionalidade = nascionalidade;
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

    public Date getDataNasci() {
        return dataNasci;
    }

    public void setDataNasci(Date dataNasci) {
        this.dataNasci = dataNasci;
    }

    public Date getDataMorte() {
        return dataMorte;
    }

    public void setDataMorte(Date dataMorte) {
        this.dataMorte = dataMorte;
    }
    
    
    
}
