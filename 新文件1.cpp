#include <iostream>
#include <map>

using namespace std;
struct link
{
    int num;
    link *next = nullptr;
};
void print(link* now)
{
    link *nt = now;
    cout<<"Created Linked list is: ";
    cout<<" "<<nt->num<<" ";
    nt = nt->next;
    while(nt != nullptr)
    {
        cout<<" "<<nt->num<<" ";
        nt = nt->next;
    }
    cout<<endl;
}
int main()
{
	int n,a,b;
	cin>>n;
	cin>>a;
	cin>>b;
	link *first = new link();
	first->num = 1;
	link *ov = first;
	for(int i=2 ;i< n+1;i++ )
	{		
		link *temp = new link();
		temp->num = i ;
		ov->next=temp; 
		ov = temp;
	}
	ov->next=first;
	//print(first);
	int m;
	for(int i=1;i<a;i++)
	{
		first = first->next;
	}
	link *pre = first;
	while (first->next != nullptr)
	{
		ov = first;
		for(int i = 1; i<b; i++)
		{
			pre = ov;
			ov = ov->next;
			//cout<<"here";
		}
		cout<<ov->num<<" ";
		if(ov->next != pre )
			pre->next = ov->next;
		else
			break;
		first = ov->next;
	}
	cout<<pre->num;
	
}
