#include <bits/stdc++.h>
using namespace std;

int main() {
  int n,m,curx,cury;
  map<int,int>map;
  string s;
  cin>>n>>m>>s;
  int x[n],y[n];
  for(int i=0;i<n;i++){
    cin>>x[i]>>y[i];
    if(i==0){
    curx=x[0],cury=y[0];
    map[0]=1;
    continue;
    }
  }
  
  for(int i=0;i<m;i++){
    switch(s[i]){
      case 'A':
        for(int j=0;j<n;j++){
          if(x[j]-curx==y[j]-cury&&map[j]==0){
            curx=x[j];
            cury=y[j];
            map[j]=1;
            break;
          }
        }
        break;
      case 'B' :
        for(int j=0;j<n;j++){
          if(x[j]-curx==-y[j]+cury&&map[j]==0){
            curx=x[j];
            cury=y[j];
            map[j]=1;
            break;
          }
        }
        break;
      case 'C':
      for(int j=0;j<n;j++){
          if(-x[j]+curx==y[j]-cury&&map[j]==0){
            curx=x[j];
            cury=y[j];
            map[j]=1;
            break;
          }
        }
        break;
      case 'D':
      for(int j=0;j<n;j++){
          if(-x[j]+curx==-y[j]+cury&&map[j]==0){
            curx=x[j];
            cury=y[j];
            map[j]=1;
            break;
          }
        }
        break;
  
      }
    }
    cout<<x[0]<<y[0];
  cout<<curx<<" "<<cury;
  
  return 0;

}